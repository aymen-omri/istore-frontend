import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBudgetComponent } from './product-budget.component';

describe('ProductBudgetComponent', () => {
  let component: ProductBudgetComponent;
  let fixture: ComponentFixture<ProductBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
