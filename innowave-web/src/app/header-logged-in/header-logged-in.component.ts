import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-logged-in',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header-logged-in.component.html',
  styleUrls: ['./header-logged-in.component.css'],
})
export class HeaderLoggedInComponent {
  isDropdownOpen: boolean = false;

  @ViewChild('dropdown') dropdown!: ElementRef<HTMLElement>;
  @ViewChild('dropdownContent') dropdownContent!: ElementRef<HTMLElement>;

  constructor(private router: Router) {}

  // Hàm tìm kiếm khi người dùng nhập từ khóa
  onSearch(query: string): void {
    if (query && query.trim().length > 0) {
      this.router.navigate(['/search-page'], {
        queryParams: { q: query.trim() },
      });
    }
  }

  // Hàm mở dropdown khi di chuyển chuột vào Danh mục sản phẩm
  openDropdown(): void {
    this.isDropdownOpen = true;
  }

  // Hàm đóng dropdown khi di chuyển chuột ra khỏi Danh mục sản phẩm và dropdown content
  closeDropdown(event: MouseEvent): void {
    const dropdownElement = this.dropdown.nativeElement;
    const dropdownContentElement = this.dropdownContent.nativeElement;

    // Kiểm tra nếu chuột không nằm trong dropdown hoặc dropdown content
    if (
      !dropdownElement.contains(event.relatedTarget as Node) &&
      !dropdownContentElement.contains(event.relatedTarget as Node)
    ) {
      this.isDropdownOpen = false;
    }
  }

  // Hàm đóng dropdown khi người dùng click vào một mục trong dropdown
  onDropdownItemClick(route: string): void {
    this.isDropdownOpen = false; // Đóng dropdown khi chọn một mục
    this.router.navigate([route]).catch((error) => {
      console.error('Navigation failed:', error);
    });
  }
}