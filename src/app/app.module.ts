import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
