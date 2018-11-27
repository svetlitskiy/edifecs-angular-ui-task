import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  text: string;

  constructor() {
    this.text = 'Some text';
  }

  ngOnInit() {
  }

}
