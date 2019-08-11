import { Component } from "@angular/core";

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular events</h1>
      <hr/>  
      <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [program]="event1"></event-thumbnail>
      <h3>{{thumbnail.someProperty}}</h3>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some Foo</button>
    </div>
  `,
  // templateUrl: './events-list.component.html'
})

export class EventListComponent {
  event1 = {
    id: 1, 
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1035 DT',
      city: 'London',
      country: 'England'
    }
  }

  handleEventClicked(data) {
    console.log(`Event Received: ${data}`);
    
  }
}