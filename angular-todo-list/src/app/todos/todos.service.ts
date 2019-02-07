import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosDataService } from './todos-data.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Observable<any[]>;

  constructor(
    private todosDataService: TodosDataService
  ) { }
  public getTodos() {
    const todos = this.todosDataService.getTodosData('todos');
    return todos;
  }
}
