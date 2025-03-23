import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // Đăng ký
  register(userData: {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    password: string
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
      catchError(this.handleError)
    );
  }

  // Đăng nhập
  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string, user: any }>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/']);
      }),
      catchError(this.handleError)
    );
  }

  // Xử lý lỗi
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Lỗi không xác định';
    
    if (error.error?.error) {
      switch (error.error.error) {
        case 'Email không tồn tại':
          errorMessage = 'Email không tồn tại';
          break;
        case 'Mật khẩu chưa đúng':
          errorMessage = 'Mật khẩu chưa đúng';
          break;
        case 'Vui lòng xác thực email trước!':
          errorMessage = 'Vui lòng kiểm tra email để xác thực tài khoản';
          break;
        case 'Email đã được sử dụng':
          errorMessage = 'Email đã tồn tại';
          break;
        default:
          errorMessage = error.error.error || error.message;
      }
    } else if (error.message) {
      errorMessage = error.message;
    }

    return throwError(() => new Error(errorMessage));
  }

  // Các phương thức khác
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
 
forgotPassword(email: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/forgot-password`, { email });
}

verifyOTP(email: string, otp: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/verify-otp`, { email, otp }).pipe(
    catchError((err) => {
      // Bắt lỗi từ server và ném ra message
      return throwError(() => new Error(err.error?.error || 'Lỗi xác thực OTP'));
    })
  );
}

resetPassword(email: string, password: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/reset-password`, { email, password });
}


}