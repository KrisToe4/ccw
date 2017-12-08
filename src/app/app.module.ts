import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@modules/material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Partial Components
import { HeaderComponent } from '@components/header/header.component';

// Major Routes
import { AboutComponent } from '@components/about/about.component';
import { ClassesComponent } from '@components/classes/classes.component';
import { ContactComponent } from '@components/contact/contact.component';
import { DevComponent } from '@components/dev/dev.component';
import { LandingComponent }     from '@components/landing/landing.component';
import { NotFoundComponent }     from '@components/not-found/not-found.component';
import { TechSupportComponent } from '@components/tech-support/tech-support.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    LandingComponent,
    NotFoundComponent,
    TechSupportComponent,
    ClassesComponent,
    DevComponent
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
