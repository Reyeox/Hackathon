import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { HackathonBox } from '../hackathon-box';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collections: HackathonBox[];
  constructor(private http: Http) { }

  ngOnInit() {
    this.getHackathonBox().subscribe(x => this.collections = x);
  }
  getHackathonBox() {
    const url = '../../assets/mock-box.json';
    return this.http.get(url).map(x => x.json());
  }
}
