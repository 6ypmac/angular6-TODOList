import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TodosService } from './todos.service';
import { TodosDataInterface } from './todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(
    private todosService: TodosService,
  ) { }

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<TodosDataInterface>();

  ngOnInit() {
    this.todosService.getTodos()
      .subscribe((list: Array<TodosDataInterface>) => {
        this.dataSource = new MatTableDataSource<TodosDataInterface>(list);
      });
  }

}
