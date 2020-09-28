import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [EcommerceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class EcommerceModule { }
