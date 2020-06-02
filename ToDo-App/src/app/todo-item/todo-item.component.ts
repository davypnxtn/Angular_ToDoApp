import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/Models/ToDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() public todos: ToDo[];
  @Output() public doneTodo: EventEmitter<ToDo> = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit(): void {
  }

  itemDone(todo: ToDo){
    this.doneTodo.emit(todo);
    console.log(todo);
  }

}
