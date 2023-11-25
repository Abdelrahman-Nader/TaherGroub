import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { CallusComponent } from './callus/callus.component';
import { ServiceComponent } from './service/service.component';
import { SheardModule } from '../sheard/sheard.module';
import { SheardRoutingModule } from '../sheard/sheard-routing.module';


@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    LandingComponent,
    ProductsComponent,
    CallusComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    RouterOutlet,
    // MaterialModule,
    BrowserModule,
    SheardModule,
    SheardRoutingModule

  ]
})
export class MainModule { }
