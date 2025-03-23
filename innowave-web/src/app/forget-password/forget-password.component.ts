import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  imports: [ReactiveFormsModule, CommonModule,RouterLink]
})
export class ForgetPasswordComponent implements OnInit {
  currentStep = 1;
  emailForm: FormGroup;
  otpForm: FormGroup;
  passwordForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  countdown = 179; // 10 phút - 1 giây
  canResend = false;
  email = '';
  showSuccessModal = false; 
  private timeoutId: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [
        Validators.required,
        Validators.pattern(/^[A-Z0-9]{6}$/) 
      ]]
    });

    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  ngOnInit() {
    this.startCountdown();
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { mismatch: true };
  }

  startCountdown() {
    this.countdown = 179; 
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(timer);
        this.canResend = true;
      }
    }, 1000);
  }

  sendOTP() {
    if (this.emailForm.invalid) return;
    
    this.isLoading = true;
    this.email = this.emailForm.value.email;
    
    this.authService.forgotPassword(this.email).subscribe({
      next: () => {
        this.currentStep = 2;
        this.isLoading = false;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.isLoading = false;
      }
    });
  }

  resendOTP() {
    this.canResend = false;
    this.startCountdown(); // Reset countdown
    this.sendOTP();
  }

  verifyOTP() {
    if (this.otpForm.invalid) return;
    
    this.isLoading = true;
    const otp = this.otpForm.value.otp;
    
    this.authService.verifyOTP(this.email, otp).subscribe({
      next: () => {
        this.currentStep = 3;
        this.isLoading = false;
        this.errorMessage = ''; // Reset lỗi
      },
      error: (err) => {
        // Hiển thị lỗi từ backend hoặc thông báo mặc định
        this.errorMessage = err.message || 'Mã OTP không đúng hoặc đã hết hạn';
        this.isLoading = false;
        
        // Reset form và focus vào input OTP
        this.otpForm.reset();
        const otpInput = document.querySelector('input[formControlName="otp"]') as HTMLElement;
        if (otpInput) otpInput.focus();
      }
    });
  }
  ngOnDestroy() {
    // Hủy timeout nếu component bị hủy trước khi hoàn thành
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private showSuccess() {
    this.showSuccessModal = true;
    this.timeoutId = setTimeout(() => {
      this.router.navigate(['/login']);
      this.showSuccessModal = false;
    }, 3000);
  }

  resetPassword() {
    if (this.passwordForm.invalid) return;
    
    this.isLoading = true;
    const newPassword = this.passwordForm.value.password;
    
    this.authService.resetPassword(this.email, newPassword).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.isLoading = false;
      }
    });
  }
}