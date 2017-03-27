import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg-home',
  template: `
    <h1> Home Component </h1>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
