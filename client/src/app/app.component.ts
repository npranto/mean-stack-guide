import { Component } from '@angular/core';

@Component({
  selector: 'msg-root',
  template: `
    <msg-navigation-bar></msg-navigation-bar>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'msg works!';
}