import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageWLEPComponent } from './product-page-wlep.component';

describe('ProductPageWLEPComponent', () => {
  let component: ProductPageWLEPComponent;
  let fixture: ComponentFixture<ProductPageWLEPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPageWLEPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPageWLEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
