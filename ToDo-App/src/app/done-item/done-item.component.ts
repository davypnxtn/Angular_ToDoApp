import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/Models/ToDo';

@Component({
  selector: 'app-done-item',
  templateUrl: './done-item.component.html',
  styleUrls: ['./done-item.component.css']
})
export class DoneItemComponent implements OnInit {

  @Input() public doneTodos: ToDo[];

  constructor() { }

  ngOnInit(): void {
  }

}
