import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg-loading-effect',
  template: `
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="loader"></div>
    </div>
  `,
  styleUrls: ['./loading-effect.component.css']
})
export class LoadingEffectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
