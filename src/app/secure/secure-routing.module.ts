import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SecureComponent } from './secure.component';
import { SocialmediarendererComponent } from './socialmedia/socialmediarenderer/socialmediarenderer.component';
import { WhatsappuiComponent } from './whatsapp/whatsappui/whatsappui.component';

const routes: Routes = [
{ path: '', component:  SecureComponent, 
	children: [
    //{ path: 'ecom', loadChildren: ()=> import("./ecommerce/ecommerce.module").then(m=>{m.EcommerceModule})}, 
    { path: 'ecommerce', component:  EcommerceComponent},
    { path: 'dashboard', component:  MainPageComponent},
    { path: 'whatsapp', component:  WhatsappuiComponent},
    { path: 'media', component:  SocialmediarendererComponent},
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecureRoutingModule { }
