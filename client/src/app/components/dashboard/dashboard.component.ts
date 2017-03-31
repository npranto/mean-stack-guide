import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg-dashboard',
  template: `
    <h1 class="text-center"> Dashboard </h1>
    <p class="text-center"> Welcome to Dashboard </p>  
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
