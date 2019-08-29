import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService, IEvent } from '../events';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    li > a.active { color: #F97924; }
    @media (max-width: 1220px) { #searchForm { display: none; }}
  `]
})

export class NavBarComponent implements OnInit {
  searchTerm = '';
  // events: IEvent[];
  foundSessions: ISession[];

  constructor(public auth: AuthService, private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.events = this.route.snapshot.data.events;
    // console.log(this.events);
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });
  }
}
