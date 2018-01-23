import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hackathon-items',
  templateUrl: './hackathon-items.component.html',
  styleUrls: ['./hackathon-items.component.css']
})
export class HackathonItemsComponent implements OnInit {
  @Input('collectionTitle') collectionTitle: string;
  constructor() { }

  ngOnInit() {
  }

}
