import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{program.name}}</h2>
      <div>Date: {{program?.date}}</div>
      <div>Time: {{program?.time}}</div>
      <div>Price: \${{program?.price}}</div>
      <div *ngIf="program?.location">
        <span>Location: {{program?.location?.address}}</span>
        <span class="pad-left">{{program?.location?.city}}, {{program?.location?.country}}</span>
      </div>
      <div [hidden]="!program?.onlineUrl">Online Url: {{ program?.onlineUrl}} </div>
      <button id="myButton" class="btn btn-primary">Click me!</button>
    </div>
  `,
  styles: [`
    #myButton { margin: 10px auto; }
    .thumbnail { min-height: 250px }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent {
  @Input() program: any 
}