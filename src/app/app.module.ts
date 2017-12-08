import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@modules/material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LandingComponent } from '@components/landing/landing.component'
import { NotFoundComponent } from '@components/not-found/not-found.component';
import { HeaderComponent } from '@components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
