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
        <span class="pad-left">{{program.location.city}}, {{program.location.country}}</span>
      </div>
      <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
    </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent {
  @Input() program: any
  someProperty: any = "Value from child component"
  @Output() eventClick = new EventEmitter();

  handleClickMe() {
    // console.log('Clicked');
    this.eventClick.emit(this.program.name);
    
  }

  logFoo(){
    console.log('Foo');
    
  }
}