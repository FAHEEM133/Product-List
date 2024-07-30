import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from "./cards/cards.component";
import { Product } from '../app/interface/product';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, CommonModule, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

@Injectable({providedIn:'root'})
export class AppComponent {

  
  title = 'angular-fetch-api-task';
  source = ''
  constructor(private http: HttpClient, private primengConfig: PrimeNGConfig) {
    // This service can now make HTTP requests via `this.http`.
  }
  categorizedProducts: { [key: string]: Product[]} = {};

  async ngOnInit() {
    this.primengConfig.ripple = true;
    try {
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

} 