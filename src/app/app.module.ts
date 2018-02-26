import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TechnicianProfileComponent } from './technician-profile/technician-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    TechnicianProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
