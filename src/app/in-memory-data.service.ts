import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ToDo } from './to-do';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 11, name: 'TypeScript' },
      { id: 12, name: 'TensorFlow' },
      { id: 13, name: 'Flutter' },
      { id: 14, name: 'React Native' },
      { id: 15, name: 'PHP' },
      { id: 16, name: 'Vive' },
      { id: 17, name: 'PWAs' },
      { id: 18, name: 'Ant Design/Material-UI' },
      {
        id: 19,
        name: 'ReactJS',
        link: 'https://reactjs.org/',
        project: 'Jetify',
        projectLink: 'https://github.com/hazthompson/Jetify'
      }
    ];
    return { todos };
  }

  genId(todos: ToDo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 11;
  }
}
