import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SocialmediaModule } from './socialmedia/socialmedia.module';



@NgModule({
  declarations: [SecureComponent,MainPageComponent],
  imports: [
    CommonModule,
    SecureRoutingModule,
    EcommerceModule,
    WhatsappModule,
    SocialmediaModule,
    SharedModule,
    NgxChartsModule
  ],
  
})
export class SecureModule { }
