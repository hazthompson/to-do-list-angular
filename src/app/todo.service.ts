import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ToDo } from './to-do';
import { TODOS } from './mock-to-dos';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodos(): Observable<ToDo[]> {
    // TODO: send the message _after_ fetching the todos
    this.messageService.add('TodoService: fetched todos');
    return this.http.get<ToDo[]>(this.todosUrl);
  }

  getTodo(id: number): Observable<ToDo> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`TodoService: fetched todo id=${id}`);
    return of(TODOS.find(todo => todo.id === id));
  }

  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`);
  }

  private todosUrl = 'api/todos'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
}
