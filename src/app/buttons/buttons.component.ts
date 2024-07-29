import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})

export class ButtonsComponent {
  @Input() text:string = '';
  @Output() myEvent = new EventEmitter<string>();
  
  emitEvent(text:string) {
  this.myEvent.emit(text)
  }
    title = 'Angularday2';
  }
