import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Primer1Component } from './components/primer1/primer1.component';
import { Primer2Component } from './components/primer2/primer2.component';
import { Primer3Component } from './components/primer3/primer3.component';
import { Primer4Component } from './components/primer4/primer4.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Primer1Component,
    Primer2Component,
    Primer3Component,
    Primer4Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
