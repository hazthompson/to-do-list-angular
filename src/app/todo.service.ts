import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ToDo } from './to-do';
import { TODOS } from './mock-to-dos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodos(): Observable<ToDo[]> {
    return of(TODOS);
  }

  constructor() {}
}
