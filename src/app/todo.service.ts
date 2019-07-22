import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ToDo } from './to-do';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodos(): Observable<ToDo[]> {
    // TODO: send the message _after_ fetching the todos
    this.messageService.add('TodoService: fetched todos');
    return this.http
      .get<ToDo[]>(this.todosUrl)
      .pipe(catchError(this.handleError<ToDo[]>('getTodos', [])));
  }

  getTodo(id: number): Observable<ToDo> {
    // TODO: send the message _after_ fetching the todo
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<ToDo>(url).pipe(
      tap(_ => this.log(`fetched todo id=${id}`)),
      catchError(this.handleError<ToDo>(`getTodo id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`);
  }

  private todosUrl = 'api/todos'; // URL to web api

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateTodo(todo: ToDo): Observable<any> {
    return this.http.put(this.todosUrl, todo, httpOptions).pipe(
      tap(_ => this.log(`updated todo id=${todo.id}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  addTodo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.todosUrl, todo, httpOptions).pipe(
      tap((newTodo: ToDo) => this.log(`added todo w/ id=${newTodo.id}`)),
      catchError(this.handleError<ToDo>('addTodo'))
    );
  }

  deleteTodo(todo: ToDo | number): Observable<ToDo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;

    return this.http.delete<ToDo>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted todo id=${id}`)),
      catchError(this.handleError<ToDo>('deleteTodo'))
    );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
}
