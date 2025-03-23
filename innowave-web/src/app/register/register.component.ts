import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  isLoading = false;
  showSuccessModal = false; // Thêm trạng thái popup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router // Thêm Router
  ) { 
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{10,11}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)
      ]],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();
  
    // Kiểm tra form và mật khẩu nhập lại
    if (this.registerForm.invalid || this.passwordsMismatch) {
      return;
    }
  
    this.isLoading = true;
    this.errorMessage = ''; // Reset error message
  
    this.authService.register({
      first_name: this.registerForm.value.first_name!,
      last_name: this.registerForm.value.last_name!,
      email: this.registerForm.value.email!,
      phone: this.registerForm.value.phone!,
      password: this.registerForm.value.password!
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.showSuccessModal = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
          this.showSuccessModal = false;
        }, 3000);
      },
      error: (err) => {
        this.errorMessage = err.message; // Lấy message từ Error object
        this.isLoading = false;
      }
    });
  }
  
  // Kiểm tra mật khẩu nhập lại
  get passwordsMismatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    
    return (
      password !== confirmPassword && 
      (
        (this.confirmPassword?.touched ?? false) || 
        (this.confirmPassword?.dirty ?? false)
      )
    );
  }
  
  // Helper methods truy cập form controls
  get first_name() { return this.registerForm.get('first_name'); }
  get last_name() { return this.registerForm.get('last_name'); }
  get email() { return this.registerForm.get('email'); }
  get phone() { return this.registerForm.get('phone'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get acceptTerms() { return this.registerForm.get('acceptTerms'); }
}