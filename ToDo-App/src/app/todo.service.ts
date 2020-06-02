import { Injectable } from '@angular/core';
import { ToDo } from 'src/Models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: ToDo[] = [];

  constructor() {}

   getTodos(): ToDo[]{
      return this.todos;
   }

   getCurrentTodos(): ToDo[]{
      return this.getTodos().filter(t => t.isDone === false);
   }

   getDoneTodos(): ToDo[]{
      return this.getTodos().filter(t => t.isDone === true);
   }

   addTodo(naam: string, persoon: string, isDone: boolean): ToDo[]{
      let lastId: number = 0;

      if (this.todos.length > 0) {
         lastId = this.todos.reduce(function (t1, t2) {
            return (t1.id > t2.id) ? t1 : t2;
         }).id;
      }
      let newId = lastId + 1;
      let todo = new ToDo( newId, naam, persoon, isDone);
      this.todos.push(todo);
      console.log(newId);

      return this.todos;
   }

   editTodo(todo: ToDo): ToDo{
      let todoDone = this.todos.filter(t => t.id === todo.id).pop();
      todoDone.isDone = !todoDone.isDone;
      console.log(todoDone);

      return todoDone;
   }
}
