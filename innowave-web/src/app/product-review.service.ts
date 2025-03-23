import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Review {
  review_id: number;
  user_id: string;
  product_id: number;
  rating: number;
  comment: string;
  date_created: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {
  private apiUrl = 'http://localhost:3000/api/reviews';

  constructor(private http: HttpClient) { }

  getReviewsByProductId(productId: number): Observable<Review[]> {
    return this.http.get<{ reviews: Review[] }>( // Thêm interface response
      `${this.apiUrl}/product/${productId}`
    ).pipe(
      map((response) => response.reviews || []), // Trích xuất mảng reviews
      catchError(() => of([]))
    );
  }
}