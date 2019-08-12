import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ToastrService } from '../common/toastr.service';

// declare let toastr;

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">Online Url: {{ event?.onlineUrl}} </div>
      <button type="submit" class="btn btn-primary" (click)="handleThumbnailClick(event.name)">Attend</button>
    </div>
  `,
  styles: [`
    #myButton { margin: 10px auto; }
    .green { color: #003300 !important; }
    .bold { font-wweight: bold; }
    .thumbnail { min-height: 300px }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent {
  @Input() event: any 

  constructor(private toastr:ToastrService){}
  
  getStartTimeClass(){
    // HTML
    // <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
    // Possible options

    // green: event?.time === '8:00 am', bold: event?.time === '8:00 am'
    
    // const isEarlyStart = this.event && this.event.time === '8:00 am'
    // return { green: isEarlyStart, bold: isEarlyStart};

    // if(this.event && this.event.time === '8:00 am')
    //   return 'green bold';
    // return '';

    if(this.event && this.event.time === '8:00 am')
      return ['green', 'bold'];
    return [];
  }

  getStartTimeStyle():any {
    if(this.event && this.event.time === '8:00 am')
      return { color: '#003300', 'font-weight': 'bold' };
    return {};
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(`You will be attending ${eventName}`);
  }
}