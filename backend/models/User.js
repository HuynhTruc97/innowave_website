const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  resetPasswordToken: {
    type: String,
    validate: {
      validator: function (v) {
        // Chấp nhận 6 ký tự chữ cái (hoa/thường) và số
        return /^[A-Za-z0-9]{6}$/.test(v);
      },
      message: "OTP phải là 6 ký tự chữ và số!"
    }
  },
  resetPasswordExpires: Date,
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email không hợp lệ"],
  },
  phone: { 
    type: String, 
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[0-9]{10,11}$/.test(v);
      },
      message: props => `${props.value} không phải số điện thoại hợp lệ!`,
    },
  },
  password: { 
    type: String, 
    required: true,
    select: false,
  },
  isVerified: { type: Boolean, default: false },
  verificationToken: String,
  verificationExpires: Date,
  role: { type: String, default: "customer" },
  date_created: { type: Date, default: Date.now },
});

// Hash password trước khi lưu
UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("User", UserSchema);