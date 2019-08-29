import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  // selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular events</h1>
      <hr/>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-4">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})

export class EventListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.eventService.getEvents().subscribe(events => this.events = events );  //subscription code before resolver
    this.events = this.route.snapshot.data.events;
  }

}
