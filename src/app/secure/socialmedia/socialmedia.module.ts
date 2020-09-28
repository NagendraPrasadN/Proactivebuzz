import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialmediarendererComponent } from './socialmediarenderer/socialmediarenderer.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SocialmediarendererComponent, SocialmediaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SocialmediaModule { }
