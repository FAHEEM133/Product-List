import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit, Injectable } from '@angular/core';
import { CardsComponent } from "../../cards/cards.component";
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UpperCasePipe, DatePipe, CardsComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class HomeComponent {
  text = Date.now();

  constructor(public http: HttpClient){}

  categorizedProducts: { [key: string]: Product[]} = {};

  async ngOnInit() {
    try {
      // this.http.get(("https://dummyjson.com/products").subscribe(data:any) => {
        
      // })
      // 
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      this.categorizeProducts(data.products);
      console.log(this.categorizedProducts);
    } catch (error) {
      console.log(error);
    }
  }
 
  categorizeProducts(products: Product[]) {
    this.categorizedProducts = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {} as { [key: string]: Product[] });
  }
  getCategories(): string[] {
    return Object.keys(this.categorizedProducts);
  }
 
  getProductsByCategory(category: string): Product[] {
    return this.categorizedProducts[category];
  }

  productSelected(product: Product){
    alert(`Product ${product.title} selected`);
  }
}
