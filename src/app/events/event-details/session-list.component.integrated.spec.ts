import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SessionListComponent } from './session-list.component';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared';
import { CollapsibleWellComponent } from 'src/app/common';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    const mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: 'Joe' }
    };
    const mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        DurationPipe,
        CollapsibleWellComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: [
        // NO_ERRORS_SCHEMA // This allows us to ignore other components
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('Initial display', () => {
    it('Should have the correct session title', () => {
      component.sessions = [
        { id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob'] }
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      // expect(element.querySelector('[well-title]').textContent).toContain('Session 1'); //Either this or
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1'); // this works for the test
    });
  });
});
