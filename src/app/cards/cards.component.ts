import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../interface/product';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ NgOptimizedImage],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() item:Product = {} as Product;
  
  @Output() btnClick = new EventEmitter<Product>();
  emitEvent(){
    this.btnClick.emit(this.item);
  }
  constructor(private router: Router) {}

  myEvent() {
    this.router.navigate([`/product/${this.item.id}`]);
  }
}