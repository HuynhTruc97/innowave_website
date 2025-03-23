import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageWLHPComponent } from './product-page-wlhp.component';

describe('ProductPageWLHPComponent', () => {
  let component: ProductPageWLHPComponent;
  let fixture: ComponentFixture<ProductPageWLHPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPageWLHPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPageWLHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
