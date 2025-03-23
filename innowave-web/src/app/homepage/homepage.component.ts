import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../product.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  newestProducts: Product[] = [];
  bestSellerProducts: Product[] = [];
  discountProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      const products = data.products;
      if (!products || products.length === 0) return;

      // Sản phẩm mới nhất: random 4 sản phẩm
      this.newestProducts = this.getRandomProducts(products, 4);

      // Sản phẩm bán chạy: 4 sản phẩm có stock thấp nhất
      this.bestSellerProducts = [...products]
        .sort((a, b) => a.stock - b.stock)
        .slice(0, 4);

      // Sản phẩm khuyến mãi: 4 sản phẩm có discount_percentage cao nhất
      this.discountProducts = [...products]
        .sort((a, b) => b.discount_percentage - a.discount_percentage)
        .slice(0, 4);
    });
  }

  private getRandomProducts(products: Product[], count: number): Product[] {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Hàm xử lý khi người dùng click "Thêm vào giỏ hàng"
  buyProduct(product: Product): void {
    console.log('Thêm vào giỏ hàng:', product.name);
    // Thêm logic xử lý thêm sản phẩm vào giỏ hàng ở đây
  }
}

