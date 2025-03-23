import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../product.service';  
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-product-page-wl3p',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-page-wlep.component.html',
  styleUrls: ['./product-page-wlep.component.css']
})
export class ProductPageWLEPComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  displayedCount: number = 8;

  // Biến quản lý trạng thái mở/đóng thanh filter
  isFilterOpen: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products;
      
      this.filteredProducts = this.products.filter(product => product.name.includes('WLEP'));
    });
  }

  // Hàm toggle để mở/đóng thanh filter
  toggleFilter(): void {
    this.isFilterOpen = !this.isFilterOpen;
    console.log('Toggle filter, isFilterOpen:', this.isFilterOpen);
  }

  loadMore(): void {
    this.displayedCount += 8;
  }

  buyProduct(product: Product): void {
    console.log('Thêm vào giỏ hàng:', product.name);
    // Logic thêm sản phẩm vào giỏ hàng
  }

  // Các hàm filter:

  // ========== Filter ==========

  // Phù hợp: Sắp xếp ngẫu nhiên
  filterPhuHop(): void {
    this.filteredProducts = this.shuffleArray(this.products.filter(product => product.name.includes('WLEP')));
    this.displayedCount = 8;
  }

  // Bán chạy: Sắp xếp theo stock thấp nhất
  filterBanChay(): void {
    this.filteredProducts = this.products
      .filter(product => product.name.includes('WLEP'))
      .sort((a, b) => a.stock - b.stock)
      .slice(0, 10);  // Giới hạn 10 sản phẩm
    this.displayedCount = this.filteredProducts.length;
  }

  // Mới nhất: Sắp xếp ngẫu nhiên
  filterMoiNhat(): void {
    this.filteredProducts = this.shuffleArray(this.products.filter(product => product.name.includes('WLEP')));
    this.displayedCount = 8;
  }

  // Giá cao - thấp: Sắp xếp theo giá giảm dần
  filterGiaCaoThap(): void {
    this.filteredProducts = this.products
      .filter(product => product.name.includes('WLEP'))
      .sort((a, b) => b.discounted_price - a.discounted_price);
    this.displayedCount = 8;
  }

  // Giá thấp - cao: Sắp xếp theo giá tăng dần
  filterGiaThapCao(): void {
    this.filteredProducts = this.products
      .filter(product => product.name.includes('WLEP'))
      .sort((a, b) => a.discounted_price - b.discounted_price);
    this.displayedCount = 8;
  }

  // Hàm để sắp xếp ngẫu nhiên
  private shuffleArray(array: Product[]): Product[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
