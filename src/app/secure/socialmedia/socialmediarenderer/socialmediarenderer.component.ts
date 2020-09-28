import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialmediarenderer',
  templateUrl: './socialmediarenderer.component.html',
  styleUrls: ['./socialmediarenderer.component.css']
})
export class SocialmediarendererComponent implements OnInit {
  productSubCategories: any;
  models: any;
  products: any;
  savedData: any;
  isEdit: boolean = false;
  constructor() { }

  ngOnInit(): void {
    }
  }
