import { Component, OnInit } from '@angular/core';
import { SIDEBAR_CONSTANTS } from './sidebar-constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  listOfSidebarLinks = SIDEBAR_CONSTANTS;

  constructor() { }

  ngOnInit() {
  }

}
