import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{program.name}}</h2>
      <div>Date: {{program.date}}</div>
      <div>Time: {{program.time}}</div>
      <div>Price: \${{program.price}}</div>
      <div>
        <span>Location: {{program.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{program.location.city}}, {{program.location.country}}</span>
      </div>
      <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
    </div>
  `,
})

export class EventThumbnailComponent {
  @Input() program: any
  @Output() eventClick = new EventEmitter();

  handleClickMe() {
    // console.log('Clicked');
    this.eventClick.emit(this.program.name);
    
  }
}