import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageWHPComponent } from './product-page-whp.component';

describe('ProductPageWHPComponent', () => {
  let component: ProductPageWHPComponent;
  let fixture: ComponentFixture<ProductPageWHPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPageWHPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPageWHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
