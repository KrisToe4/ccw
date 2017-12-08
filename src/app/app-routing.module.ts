import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '@components/about/about.component';
import { ClassesComponent } from '@components/classes/classes.component';
import { ContactComponent } from '@components/contact/contact.component';
import { DevComponent } from '@components/dev/dev.component';
import { LandingComponent }     from '@components/landing/landing.component';
import { NotFoundComponent }     from '@components/not-found/not-found.component';
import { TechSupportComponent } from '@components/tech-support/tech-support.component';

const appRoutes: Routes = [
  { path: '',  component: LandingComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'classes',  component: ClassesComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'dev',  component: DevComponent },
  { path: 'support',  component: TechSupportComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes), CommonModule ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
