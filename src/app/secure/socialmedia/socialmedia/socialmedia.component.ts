import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef, private fb:FormBuilder) { 
  
  }

  ngOnInit(): void {
    document.getElementById("myDropdown").classList.toggle("hide");
  }
  showCatItemDrop(event){
    event.stopPropagation()
    event.preventDefault();
    document.getElementById("myDropdown").classList.toggle("show");
  }
}
