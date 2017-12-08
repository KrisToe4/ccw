import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialsListModule } from '@modules/materials-list.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LandingComponent } from '@components/landing/landing.component'
import { NotFoundComponent } from '@components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterialsListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
