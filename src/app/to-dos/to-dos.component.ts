import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';
import { TODOS } from '../mock-to-dos';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos = TODOS;
  toDo: ToDo = {
    id: 1,
    name: 'React Hooks'
  };

  constructor() {}

  ngOnInit() {}
}
