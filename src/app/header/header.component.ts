import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() registerEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() loginEvent: EventEmitter<any> = new EventEmitter<any>();
  register = false;
  login = false;
  constructor() { 
    
  }

  ngOnInit() {
  }
  openRegister() {
    this.register = true;
    this.registerEvent.emit(this.register);
  }
  openLogin() {
    this.login = true;
    this.loginEvent.emit(this.login);
  }
}
