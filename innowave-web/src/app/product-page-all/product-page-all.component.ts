import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../product.service';
import {RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-page-all',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-page-all.component.html',
  styleUrls: ['./product-page-all.component.css']
})
export class ProductPageAllComponent implements OnInit {
  
  products: Product[] = [];
  filteredProducts: Product[] = [];
  displayedCount: number = 8;

  // Biến quản lý trạng thái mở/đóng thanh filter
  isFilterOpen: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products;
      // Ban đầu hiển thị tất cả sản phẩm
      this.filteredProducts = [...this.products];
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
    filterPhuHop(): void {
      this.filteredProducts = this.shuffleArray([...this.products]);
      this.displayedCount = 8;
    }
    filterBanChay(): void {
      this.filteredProducts = [...this.products]
        .sort((a, b) => a.stock - b.stock)
        .slice(0, 10);
      this.displayedCount = this.filteredProducts.length;
    }
    filterMoiNhat(): void {
      this.filteredProducts = this.shuffleArray([...this.products]);
      this.displayedCount = 8;
    }
    filterGiaCaoThap(): void {
      this.filteredProducts = [...this.products].sort(
        (a, b) => b.discounted_price - a.discounted_price
      );
      this.displayedCount = 8;
    }
    filterGiaThapCao(): void {
      this.filteredProducts = [...this.products].sort(
        (a, b) => a.discounted_price - b.discounted_price
      );
      this.displayedCount = 8;
    }
  
    private shuffleArray(array: Product[]): Product[] {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  }
  