import {Component, OnInit} from '@angular/core';
import { StartTitleService } from '../../shared/services/title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo: string;

  constructor(private data: StartTitleService) {}

  ngOnInit() {
    this.data.currentTitle.subscribe(title => this.logo = title);
  }
}
