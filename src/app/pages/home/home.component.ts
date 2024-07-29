import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit, Injectable } from '@angular/core';
import { CardsComponent } from "../../cards/cards.component";

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

export class HomeComponent implements OnInit {
getProductsByCategory(_t7: any): any {
throw new Error('Method not implemented.');
}
getCategories(): any {
throw new Error('Method not implemented.');
}
  utcTime: string = '';
  istTime: string = '';

  add(x: number, y: number) {
    return x + y;
  }

  constructor() { }

  ngOnInit(): void {
    this.convertUtcToIst(new Date().toISOString());
  }

  convertUtcToIst(utcDateStr: string): void {
    const utcDate = new Date(utcDateStr);
    const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC + 5:30
    const istDate = new Date(utcDate.getTime() + istOffset);
    this.utcTime = utcDate.toISOString();
    this.istTime = istDate.toISOString();
  }
}
