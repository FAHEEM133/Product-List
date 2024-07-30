import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';
import { HomeComponent } from '../pages/home/home.component';
import { CardsComponent } from '../cards/cards.component';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  standalone: true,
  imports: [HomeComponent, CardsComponent,NgIf,NgOptimizedImage],
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent{
  @Input() item: Product = {} as Product
  @Output() btnClick = new EventEmitter<Product>();

  emitEvent(){
    this.btnClick.emit(this.item);
    alert(`Successfully ordered ${this.item.title}`)
  }
  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  isLoading:Boolean=false;

  async ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        this.isLoading=true
        this.item = await response.json();
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
  }
}
