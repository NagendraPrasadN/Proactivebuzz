import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  @Input('tooltipstatus')tooltipstatus:boolean;
  @Input('sidenavstatus')sidenavstatus:boolean;
  @Input('sideNavItem')sideNavItem:any;
  
  clickedItem = 'Dashboard';
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  constructor(private router:Router,private _snackBar: MatSnackBar){
   
}
ngOnInit(): void {
  let refreshClick= this.router.url.slice(1)
  this.clickedItem = refreshClick.charAt(0).toUpperCase() + refreshClick.slice(1)
  console.log(this.clickedItem);
}
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

 
  navigate(action,label){
    this.clickedItem = label;
    this.router.navigate([action])
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
