import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './material.module';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterOutlet,
    // MaterialModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
