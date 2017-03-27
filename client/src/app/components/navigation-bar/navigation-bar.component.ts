import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg-navigation-bar',
  template: `
    <h1> NavigationBar Component </h1>  
  `,
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
