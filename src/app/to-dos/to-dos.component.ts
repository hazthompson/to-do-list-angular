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

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => (this.todos = todos));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.todoService.addTodo({ name } as ToDo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

  delete(todo: ToDo): void {
    this.todos = this.todos.filter(h => h !== todo);
    this.todoService.deleteTodo(todo).subscribe();
  }
}
