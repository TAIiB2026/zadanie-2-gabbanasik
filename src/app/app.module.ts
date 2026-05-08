import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleModule } from './people/people.module';
import { Komponent1Component } from './komponent1/komponent1.component';
import { Komponent2Component } from './komponent2/komponent2.component';

@NgModule({
  declarations: [
    AppComponent,
    Komponent1Component,
    Komponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
