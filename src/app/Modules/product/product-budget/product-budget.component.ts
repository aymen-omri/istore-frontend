import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Utils/Services/Product.service';

@Component({
  selector: 'app-product-budget',
  templateUrl: './product-budget.component.html',
  styleUrl: './product-budget.component.css'
})
export class ProductBudgetComponent implements OnInit {
  ngOnInit(): void {
    this.GetAllProducts();
    console.log(this.rangeValues)
  }

  products: any[] = [];
  rangeValues: number[] = [0, 10000];
  filterProducts: any[] = [];

  constructor(private productService: ProductService) { }

  GetAllProducts() {
    this.productService.getAllProducts().subscribe((data: any) => { this.products = this.filterProducts = data; });
  }

  filter(event: any) {
    this.filterProducts = this.products.filter((prod: any) => prod.price >= event.values[0] && prod.price <= event.values[1]);
  }


}
