import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../interface/product';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ NgOptimizedImage],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  constructor(private router: Router) {}

  @Input() item!: Product;
  myEvent() {
    this.router.navigate([`/product/${this.item.id}`]);
  }
}