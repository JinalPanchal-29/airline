import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowseFlightsComponent } from './components/browse-flights/browse-flights.component';
import { MyFlightsComponent } from './components/my-flights/my-flights.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseFlightsComponent,
    MyFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
