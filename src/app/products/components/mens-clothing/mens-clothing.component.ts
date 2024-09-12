import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/services/product.service';
import { ProductResponse, Category, Rating } from '@app/interface/product.interface';


@Component({
  selector: 'app-mens-clothing',
  templateUrl: './mens-clothing.component.html',
  styleUrl: './mens-clothing.component.css'
})
export class MensClothingComponent  implements OnInit{
  products: ProductResponse[] = [];
  showSpinner: boolean = true;
  selectedProduct: ProductResponse | null = null;
  selectedRating: Rating = { rate: 0, count: 0 };
  selectedCategory: Category = Category.MenSClothing;
product: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts(this.selectedCategory);
  }

  loadProducts(category: Category): void {
    this.productService.getProductsByCategory(category).subscribe({
      next: (data) => {
        this.products = data;
        this.showSpinner = false;
      },
      error: (err) => {
        console.error('Error fetching products', err);
        this.showSpinner = false;
      }
    });
  }

  changeCategory(category: Category): void {
    this.selectedCategory = category;
    this.loadProducts(this.selectedCategory);
  }

  openModal(product: ProductResponse): void {
   this.selectedProduct = product;
   this.selectedRating = product.rating;
 }
}
