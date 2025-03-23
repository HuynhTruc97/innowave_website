import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageWEPComponent } from './product-page-wep.component';

describe('ProductPageWEPComponent', () => {
  let component: ProductPageWEPComponent;
  let fixture: ComponentFixture<ProductPageWEPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPageWEPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPageWEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
