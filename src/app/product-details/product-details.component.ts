import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        this.product = await response.json();
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
  }
}
