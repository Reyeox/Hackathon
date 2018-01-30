import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  register = false;

  openRegister(event){
    var body = document.getElementsByTagName('body')[0];
    this.register = event;
    if(this.register = true) {
      body.setAttribute('class', 'register-open');
    }
  }
}
