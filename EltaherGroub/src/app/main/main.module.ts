import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    RouterOutlet,
    MaterialModule,
    BrowserModule

  ]
})
export class MainModule { }
