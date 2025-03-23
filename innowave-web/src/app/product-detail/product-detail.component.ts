import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductService, Product } from '../product.service';
import { ProductReviewService, Review } from '../product-review.service';

interface DescriptionEntry {
  key: string;
  value: string[];
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // Product Information
  product!: Product;
  quantity = new FormControl<number>(1);
  descriptionEntries: DescriptionEntry[] = [];

  // Review System
  reviews: Review[] = [];
  filteredReviews: Review[] = [];
  averageRating: number = 0;
  ratingCounts: { [key: number]: number } = {5:0, 4:0, 3:0, 2:0, 1:0};
  selectedRating: number = 0; // 0 = Tất cả, 5 = 5 sao, 4 = 4 sao, ...
  visibleReviews: number = 3; // Số lượng đánh giá hiển thị ban đầu

  // Related Products
  relatedProducts: Product[] = [];

  // Tab Control
  activeTab: 'specs' | 'reviews' = 'specs';

  readonly ratingFilters = [
    { value: 0, label: 'Tất cả' },
    { value: 5, label: '5 ★' },
    { value: 4, label: '4 ★' },
    { value: 3, label: '3 ★' },
    { value: 2, label: '2 ★' },
    { value: 1, label: '1 ★' }
  ];

  constructor(
    private productService: ProductService,
    private reviewService: ProductReviewService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      
      if (productId) {
        const numericProductId = Number(productId);
        this.loadProduct(numericProductId);
        this.loadReviews(numericProductId);
      } else {
        this.handleInvalidProduct();
      }
    });
  }
  

  private loadProduct(productId: number): void {
    this.productService.getProductById(productId).subscribe({
      next: (data) => {
        if (!data?.product) {
          this.handleInvalidProduct();
          return;
        }
  
        // Chuyển đổi category_id sang number và gán vào product
        this.product = {
          ...data.product,
          category_id: Number(data.product.category_id) // ✅ Đã sửa
        };
  
        this.processDescription(data.product.description);
        this.loadRelatedProducts(data.product);
      }, // ⬅️ Thêm dấu phẩy ở đây
      error: () => this.handleInvalidProduct()
    });
  }

  private loadRelatedProducts(currentProduct: Product): void {
    this.productService.getProducts().subscribe({
      next: (response) => {
        // Sửa: Lấy category_id thay vì dựa vào tên sản phẩm
        const currentCategoryId = currentProduct.category_id;
  
        this.relatedProducts = response.products
          .filter((product: Product) => 
            product.product_id !== currentProduct.product_id && 
            product.category_id === currentCategoryId // Sửa: So sánh category_id
          )
          .sort((a: Product, b: Product) => 
            a.discount_percentage - b.discount_percentage
          )
          .slice(0, 4);
      },
      error: (error) => console.error('Error loading related products:', error)
    });
  }

  private loadReviews(productId: number): void {
    this.reviewService.getReviewsByProductId(productId).subscribe({
      next: (reviews) => {
        this.reviews = this.sortReviews(reviews);
        this.filteredReviews = [...this.reviews];
        this.calculateRatings();
      },
      error: (error) => console.error('Error loading reviews:', error)
    });
  }

  // Review Filtering and Pagination
  filterReviews(rating: number): void {
    this.selectedRating = rating;
    this.visibleReviews = 3; // Reset số lượng đánh giá hiển thị khi lọc

    this.filteredReviews = rating === 0 
      ? [...this.reviews] // Hiển thị tất cả đánh giá
      : this.reviews.filter(review => 
          this.getRoundedRating(review.rating) === rating
        );
  }

  loadMoreReviews(): void {
    this.visibleReviews += 3; // Tăng số lượng đánh giá hiển thị
  }

  // Rating Calculations
  private calculateRatings(): void {
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    this.averageRating = this.reviews.length > 0 
      ? total / this.reviews.length 
      : 0;

    // Tính số lượng đánh giá theo từng sao
    this.ratingCounts = {5:0, 4:0, 3:0, 2:0, 1:0};
    this.reviews.forEach(review => {
      const rating = this.getRoundedRating(review.rating);
      this.ratingCounts[rating as keyof typeof this.ratingCounts]++;
    });
  }

  // Helper Methods
  private sortReviews(reviews: Review[]): Review[] {
    return reviews.sort((a, b) => 
      new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
    );
  }

  getRoundedRating(rating: number): number {
    return Math.round(rating);
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Product Description Processing
  private processDescription(description: Record<string, any>): void {
    this.descriptionEntries = Object.entries(description)
      .filter(([_, value]) => this.isValidEntry(value))
      .map(([key, value]) => ({
        key,
        value: this.normalizeValue(value)
      }));
  }

  private isValidEntry(value: any): boolean {
    return typeof value === 'string' || this.isStringArray(value);
  }

  private normalizeValue(value: string | string[]): string[] {
    return Array.isArray(value) ? value : [value];
  }

  private isStringArray(value: any): value is string[] {
    return Array.isArray(value) && value.every(item => typeof item === 'string');
  }

  // Error Handling
  private handleInvalidProduct(): void {
    console.error('Invalid product ID or product not found');
    this.router.navigate(['/product-page-all']);
  }

  // Quantity Controls
  increment(): void {
    const currentValue = this.quantity.value ?? 1;
    this.quantity.setValue(currentValue + 1);
  }

  decrement(): void {
    const currentValue = this.quantity.value ?? 1;
    if (currentValue > 1) this.quantity.setValue(currentValue - 1);
  }

  // Cart Actions
  addToCart(product: Product): void {
    console.log('Added to cart:', product.name);
  }

  addToWishlist(product: Product): void {
    console.log('Added to wishlist:', product.name);
  }

  buyNow(product: Product): void {
    console.log('Buy now:', product.name);
  }

  // Phương thức xác định hạng mục sản phẩm
  getProductCategory(categoryId?: number): { 
    category: string; 
    routerLink: string 
  } {
    // Giá trị mặc định nếu categoryId không tồn tại
    if (!categoryId) {
      return { category: 'Tất cả sản phẩm', routerLink: '/products' };
    }
  
    // Logic phân loại theo category_id
    switch (categoryId) {
      case 1:
        return { category: 'Tai nghe chụp tai không dây', routerLink: '/product_page_WLHP' };
      case 2:
        return { category: 'Tai nghe in-ear không dây', routerLink: '/product_page_WLEP' };
      case 3:
        return { category: 'Tai nghe chụp tai có dây', routerLink: '/product_page_WHP' };
      case 4:
        return { category: 'Tai nghe in-ear có dây', routerLink: '/product_page_WEP' };
      default:
        return { category: 'Tất cả sản phẩm', routerLink: '/products' };
    }
  }
}