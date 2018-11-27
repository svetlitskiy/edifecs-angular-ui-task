import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  tabs = [];
  activeTab = 0;

  constructor(
    private cookieService: CookieService) {
  }

  @Input() set ngModel(ngModel: Array<object>) {
    this.tabs = ngModel;
  }

  ngOnInit() {
    const activeTabIndex = JSON.parse(this.cookieService.get('activeTab') || '0');
    this.activeTab = activeTabIndex;
  }

  setTab(tab) {
    const activeTab = this.tabs.indexOf(tab);
    this.cookieService.set( 'activeTab', JSON.stringify(activeTab));
    this.activeTab = activeTab;
  }

}
