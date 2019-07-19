import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ToDo } from './to-do';
import { TODOS } from './mock-to-dos';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodos(): Observable<ToDo[]> {
    // TODO: send the message _after_ fetching the todos
    this.messageService.add('TodoService: fetched todos');
    return of(TODOS);
  }

  constructor(private messageService: MessageService) {}
}
