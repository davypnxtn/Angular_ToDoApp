import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/Models/ToDo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

  public doneTodos: ToDo[];

  constructor(private _todoService: TodoService) { }

  ngOnInit(){
    this.getDoneItems();
  }

  getDoneItems(){
    this.doneTodos = this._todoService.getDoneTodos();
    console.log(this.doneTodos);
  }

}
