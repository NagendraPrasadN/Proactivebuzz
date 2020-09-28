import { Injectable } from '@angular/core';
import { LEFTMENU } from '../configs/leftitem.config';

@Injectable({
  providedIn: 'root'
})
export class LeftsidenavService {
  leftsideList:any;
  constructor() { }
  getLeftsideNavItem(){
  this.leftsideList = LEFTMENU
  return this.leftsideList;
  }
}
