import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
})
export class EventsAppComponent {
  constructor(private auth: AuthService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.auth.checkAuthenticationstatus();
  }
}
