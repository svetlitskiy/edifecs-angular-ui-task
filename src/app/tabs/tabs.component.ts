import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabs = [{
    title: 'Tab1',
    active: true,
    text: 'Some text1'
  }, {
    title: 'Tab2',
    text: 'Some text2'
  }, {
    title: 'Tab3',
    disabled: true,
    text: 'Some text3'
  }];
  activeTab = 0;

  constructor(private cookieService: CookieService) {

  }

  @Input() tabs: any;

  //@Input()
  /*set tabs(tabs: Object) {
    this._tabs = tabs;
  }*/

  ngOnInit() {
    const activeTabIndex = JSON.parse(this.cookieService.get('activeTab'));
    console.log(activeTabIndex);
    this.activeTab = activeTabIndex;
  }

  setTab(tab) {
    const activeTab = this.tabs.indexOf(tab).toString();
    this.cookieService.set( 'activeTab', JSON.stringify(activeTab));
    this.activeTab = activeTab;
  }

}
