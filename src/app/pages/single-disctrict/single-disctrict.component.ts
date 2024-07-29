import { Component, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-single-disctrict',
  standalone: true,
  imports: [],
  templateUrl: './single-disctrict.component.html',
  styleUrl: './single-disctrict.component.css'
})

export class SingleDisctrictComponent {
 private calculateService = inject(HomeComponent);
 totalCost = this.calculateService.add(50,25);
}
