import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'msg-home',
  template: `
 
    <div class="jumbotron">
      <h1> Welcome to <br> MEAN Stack Guide </h1>
      <p> A unique bootstrap, boilterplate, starter kit and a guide to a complete MongoDB, Express, Angular and NodeJS application for end to end development </p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button"> Explore! </a></p>
    </div> 
    
    <div class="page-header">
      <h1> Front End <small> Technologies </small></h1>
    </div>    
    <div class="row">
      <div class="col-xs-6 col-md-3" *ngFor="let frontEnd of frontEndTechs">
        <a href="{{ frontEnd.techHome }}" class="thumbnail">
          <img src="{{ frontEnd.logoPath }}" alt="{{ frontEnd.title }}">
        </a>
      </div>
    </div>
    
    <div class="page-header">
      <h1> Back End <small> Technologies </small></h1>
    </div>    
    <div class="row">
      <div class="col-xs-6 col-md-3" *ngFor="let backEnd of backEndTechs" data-toggle="tooltip" data-placement="bottom" title="{{backEnd.title}}">
        <a href="{{ backEnd.techHome }}" class="thumbnail">
          <img src="{{ backEnd.logoPath }}" alt="{{ backEnd.title }}">
        </a>
      </div>
    </div>
 
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  frontEndTechs: Object[] = [
    {
      title: 'Angular 2',
      logoPath: './assets/images/technologies/front-end/angular2.png',
      techHome: 'https://github.com/npranto/mean-stack-guide'
    },
    {
      title: 'Bootstrap',
      logoPath: './assets/images/technologies/front-end/bootstrap.png',
      techHome: 'https://github.com/npranto/mean-stack-guide'
    },
    {
      title: 'CSS3',
      logoPath: './assets/images/technologies/front-end/css3.png',
      techHome: 'https://github.com/npranto/mean-stack-guide'
    },
    {
      title: 'HTML5',
      logoPath: './assets/images/technologies/front-end/html5.png',
      techHome: 'https://github.com/npranto/mean-stack-guide'
    },
    {
      title: 'ES6',
      logoPath: './assets/images/technologies/front-end/javascript.png',
      techHome: 'https://github.com/npranto/mean-stack-guide'
    }
  ];

  backEndTechs: Object[] = [
    {
      title: 'MongoDB',
      logoPath: './assets/images/technologies/back-end/mongodb.png',
      techHome: 'https://github.com/npranto/mean-stack-guide'
    },
    {
      title: 'NodeJS',
      logoPath: './assets/images/technologies/back-end/nodejs.png',
      techHome: 'https://github.com/npranto/mean-stack-guide'
    },
    {
      title: 'Passport',
      logoPath: './assets/images/technologies/back-end/passport.png',
      techHome: 'https://github.com/npranto/mean-stack-guide'
    },
    {
      title: 'JSON Web Token',
      logoPath: './assets/images/technologies/back-end/jsonwebtoken.png',
      techHome: 'https://github.com/npranto/mean-stack-guide'
    },
    {
      title: 'Express',
      logoPath: './assets/images/technologies/back-end/expressjs.png',
      techHome: 'https://github.com/npranto/mean-stack-guide'
    },
    {
      title: 'BcryptJS',
      logoPath: './assets/images/technologies/back-end/bcryptjs.png',
      techHome: 'https://github.com/npranto/mean-stack-guide'
    }
  ];

  constructor() { }

  ngOnInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

}
