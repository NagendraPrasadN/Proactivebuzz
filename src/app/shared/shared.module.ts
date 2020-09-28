import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankComponent } from './components/blank/blank.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './components/material/material.module';
import { LeftsidenavService } from './services/leftsidenav.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [SidebarComponent, BlankComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    BrowserAnimationsModule,
  
  ],
  exports:[
    SidebarComponent,
    BlankComponent,
    MaterialModule,
    DragDropModule,
    BrowserAnimationsModule,
   
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
  	return {
  		ngModule: SharedModule,
      providers: [
        LeftsidenavService
      ]
  	}
	}
 }
