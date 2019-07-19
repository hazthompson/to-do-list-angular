import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos: ToDo[];

  selectedTodo: ToDo;
  onSelect(todo: ToDo): void {
    this.selectedTodo = todo;
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }
}
