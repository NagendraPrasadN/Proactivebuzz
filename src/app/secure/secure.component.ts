import { Component, OnInit } from '@angular/core';
import { LeftsidenavService } from '../shared/services/leftsidenav.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  sideNavItem:any;
  constructor(private navService:LeftsidenavService) { }

  ngOnInit(): void {
    this.loadAllNavItem()
  }
  loadAllNavItem(){
  this.sideNavItem = this.navService.getLeftsideNavItem()
}
}
