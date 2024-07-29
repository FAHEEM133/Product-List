import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit {

  addList!:FormGroup;
  tasks: { text: string, strikethrough: boolean }[] = [];

  ngOnInit(){
    this.addList = new FormGroup({
      listprompt : new FormControl('',[Validators.required]),
    })
  }
  onSubmit() {
    if (this.addList.valid) {
      this.tasks.push({ text: this.addList.value.listprompt, strikethrough: false });
      this.addList.reset();
    }
  }

  toggleStrikethrough(index: number) {
    this.tasks[index].strikethrough = !this.tasks[index].strikethrough;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}