import { Component } from "@angular/core";

@Component({
  selector: 'events-list',
  // template: `
  //   <div>
  //     <h1>Upcoming Angular events</h1>
  //     <hr/>  
  //     <event-thumbnail [event]="event1"></event-thumbnail>
  //   </div>
  // `,
  templateUrl: './events-list.component.html'
})

export class EventListComponent {
  event = {
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
}