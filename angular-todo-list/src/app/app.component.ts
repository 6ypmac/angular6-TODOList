import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StartTitleService } from './shared/services/title.service';
/*import { TodosService } from './todos/todos.service';*/
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map, mergeMap } from 'rxjs/operators';

/*interface Todo {
  name: String;
}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title: string;

  constructor(
    private startTitle: StartTitleService,
    /*private todosService: TodosService,*/
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    /*this.todosService.getTodos()
      .subscribe((list: Array<Todo>) => {
        console.log(list[0].name);
      });*/
    /*todos.push({name: 'aaa'});*/
    this.startTitle.currentTitle.subscribe(title => this.title = title);

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }))
      .pipe(mergeMap((route) => route.data))
      .subscribe(
        event => this.titleService.setTitle(this.title + ' :: ' + event['title'])
      );
  }
}
