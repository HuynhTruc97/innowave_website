const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const sendVerificationEmail = async (email, token) => {
  const verificationUrl = `${process.env.BACKEND_URL}/api/auth/verify-email?token=${token}`;

  await transporter.sendMail({
    from: `"INNOWAVE" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Xác thực email - INNOWAVE",
    html: `
      <h2 style="
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #333;
      ">Xin chào!</h2>

      <p style="
        font-size: 16px;
        color: #555;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      ">Vui lòng click vào link sau để kích hoạt tài khoản:</p>

      <a href="${verificationUrl}" style="
        background: linear-gradient(135deg, #007bff, #0056b3);
        color: #fff;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 8px;
        display: inline-block;
        margin: 20px 0;
        font-weight: bold;
        font-size: 16px;
        transition: background 0.3s ease;
      ">Xác thực email</a>

      <p style="
        font-size: 14px;
        color: #999;
        font-style: italic;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      ">Link có hiệu lực trong vòng 24 giờ.</p>
    `
  });
};

// Đăng ký
router.post("/register", async (req, res) => {
  try {
    const { email, phone } = req.body;

    // Kiểm tra email và số điện thoại trùng lặp
    const existingUser = await User.findOne({
      $or: [{ email }, { phone }]
    });

    if (existingUser) {
      const error = existingUser.email === email
        ? "Email đã được sử dụng"
        : "Số điện thoại đã được đăng ký";
      return res.status(400).json({ error });
    }

    // Tạo token và thời hạn
    const verificationToken = crypto.randomBytes(20).toString("hex");
    const verificationExpires = new Date(Date.now() + 86400000); // 24h

    // Tạo user mới với password nguyên bản (KHÔNG hash thủ công)
    const newUser = new User({
      ...req.body,
      verificationToken,
      verificationExpires
    });

    await newUser.save(); // Hook pre-save trong User.js sẽ tự hash password
    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({
      success: true,
      message: "Đăng ký thành công! Vui lòng kiểm tra email để xác thực."
    });

  } catch (err) {
    console.error("[ERROR] Lỗi đăng ký:", err);
    res.status(500).json({
      error: err.message || "Lỗi server: Vui lòng thử lại sau"
    });
  }
});
// Xác thực email
router.get("/verify-email", async (req, res) => {
  try {
    const { token } = req.query;
    console.log("[DEBUG] Token xác thực:", token);

    // Tìm user theo token và thời hạn
    const user = await User.findOne({
      verificationToken: token,
      verificationExpires: { $gt: Date.now() } // Kiểm tra thời gian bằng timestamp
    });

    if (!user) {
      console.log("[ERROR] Token không hợp lệ hoặc hết hạn");
      return res.send(`
        <div style="
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #fcebea;
          border: 1px solid #f5c6cb;
          padding: 30px;
          border-radius: 10px;
          text-align: center;
          max-width: 500px;
          margin: 40px auto;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        ">
          <h1 style="color: #dc3545; font-size: 28px;">Xác thực thất bại ❌</h1>
          <p style="font-size: 16px; color: #333;">Token không hợp lệ hoặc đã hết hạn.</p>
          <a href="${process.env.FRONTEND_URL}/login" style="
            display: inline-block;
            margin-top: 20px;
            padding: 12px 24px;
            background: linear-gradient(135deg, #dc3545, #c82333);
            color: #fff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            font-size: 16px;
          ">Đăng nhập tại đây</a>
        </div>
      `);
    }

    // Cập nhật trạng thái
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationExpires = undefined;
    await user.save();

    console.log("[SUCCESS] Đã xác thực email cho user:", user.email);

    // Trả về trang thông báo thành công
    res.send(`
      <div style="
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #e6f9ec;
        border: 1px solid #b6e2c1;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        max-width: 500px;
        margin: 40px auto;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      ">
        <h1 style="color: #28a745; font-size: 28px;">Xác thực thành công ✅</h1>
        <p style="font-size: 16px; color: #333;">Tài khoản của bạn đã được kích hoạt.</p>
        <a href="${process.env.FRONTEND_URL}/login" style="
          display: inline-block;
          margin-top: 20px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #28a745, #218838);
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
          font-size: 16px;
        ">Đăng nhập tại đây</a>
      </div>
    `);

  } catch (err) {
    console.error("[ERROR] Lỗi xác thực:", err);
    res.send(`
      <h1>Lỗi server ⚠️</h1>
      <p>${err.message}</p>
      <a href="${process.env.FRONTEND_URL}/login">Quay lại trang đăng nhập</a>
    `);
  }
});


// Đăng nhập
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password"); // ✅ Lấy cả password

    if (!user) {
      return res.status(401).json({ error: "Email không tồn tại" });
    }

    // So sánh mật khẩu
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Mật khẩu chưa đúng" });
    }

    // Kiểm tra xác thực email
    if (!user.isVerified) {
      return res.status(401).json({ error: "Vui lòng xác thực email trước!" });
    }

    // Tạo JWT
    const token = jwt.sign({ userId: user._id, name: user.first_name }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({
      success: true,
      token,
      user: { id: user._id, email: user.email, role: user.role }
    });

  } catch (err) {
    res.status(500).json({ error: "Lỗi server" });
  }
});

module.exports = router;

// Gửi OTP qua email
function generateOTP(length = 6) {
  const string = '0123456789';
  let OTP = '';

  for (let i = 0; i < length; i++) {
    OTP += string[Math.floor(Math.random() * string.length)];
  }

  return OTP;
};

// Sửa route /forgot-password
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Email không tồn tại" });
    }

    // Sinh OTP 6 ký tự (chữ + số)
    const resetToken = generateOTP(6); //
    console.log("[DEBUG] OTP:", resetToken);

    // Lưu vào database
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 180000;
    await user.save();

    // Gửi email
    await transporter.sendMail({
      from: `"INNOWAVE" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Mã OTP đặt lại mật khẩu",
      html: `
        <h2>Mã OTP của bạn là: <strong>${resetToken}</strong></h2>
        <p>Mã có hiệu lực trong 3 phút</p>
      `
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Lỗi server" });
  }
});

// Xác thực OTP
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({
      email,
      resetPasswordToken: otp,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ error: "OTP không hợp lệ hoặc đã hết hạn" });
    }

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Lỗi server" });
  }
});

// Đặt lại mật khẩu
router.post("/reset-password", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({ error: "Người dùng không tồn tại" });
    }

    user.password = password;
    user.markModified('password');
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Lỗi server" });
  }
});