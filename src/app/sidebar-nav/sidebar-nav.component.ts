import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {
 
  visit :boolean = true;

  constructor() { 
    
  }

  ngOnInit() {
  }

  visitsite(){
    this.visit = false;
  }

}
