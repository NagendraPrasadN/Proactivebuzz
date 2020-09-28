import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappuiComponent } from './whatsappui/whatsappui.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [WhatsappuiComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WhatsappModule { }
