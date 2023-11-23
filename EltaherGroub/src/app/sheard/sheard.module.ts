import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheardRoutingModule } from './sheard-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MainModule } from '../main/main.module';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SheardRoutingModule,
    // MainModule
  ],
  exports:[
    FooterComponent,
  ]
})
export class SheardModule { }
