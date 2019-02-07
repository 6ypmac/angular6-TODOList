import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartTitleService {

  private titleSource = new BehaviorSubject<string>('TODO List');
  currentTitle = this.titleSource.asObservable();

  constructor() { }
}
