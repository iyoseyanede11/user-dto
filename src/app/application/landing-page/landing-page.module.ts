import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { UserFormComponent } from 'src/app/components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LandingPageComponent,FooterComponent,UserFormComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LandingPageModule { }
