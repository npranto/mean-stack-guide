import { Component } from '@angular/core';

@Component({
  selector: 'msg-root',
  template: `
    <msg-navigation-bar></msg-navigation-bar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'msg works!';
}
