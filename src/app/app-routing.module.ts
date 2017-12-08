import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent }     from '@components/landing/landing.component';
import { NotFoundComponent }     from '@components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '',  component: LandingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes), CommonModule ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
