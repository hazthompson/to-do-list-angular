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

  selectedTodo: ToDo;
  onSelect(todo: ToDo): void {
    this.selectedTodo = todo;
  }

  constructor() {}

  ngOnInit() {}
}
