import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/Models/ToDo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: ToDo[];
  public newTodo: string;
  public persoon: string;
  public doneTodo: ToDo;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(){
    this.todos = this._todoService.getCurrentTodos();
  }

  addTodo(){
    if (this.newTodo){
      this.todos = this._todoService.addTodo(this.newTodo, this.persoon, false);
    }
    this.newTodo = "";
    this.persoon = "";
    console.log(this.todos);
    return this.getTodos();
  }

  editTodo(doneTodo: ToDo){
    this.doneTodo = this._todoService.editTodo(doneTodo);
    console.log(this.todos);
    return this.getTodos();
}

}