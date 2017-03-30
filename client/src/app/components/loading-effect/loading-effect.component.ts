import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'msg-loading-effect',
  template: `
    <div class="loader"></div>
  `,
  styleUrls: ['./loading-effect.component.css']
})
export class LoadingEffectComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
