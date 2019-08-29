import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  // tslint:disable-next-line: prefer-const
  let mockAuthService;
  // tslint:disable-next-line: prefer-const
  let mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('Should filter the sessions correctly', () => {
      component.sessions =  [
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'beginner' },
        { name: 'session 3', level: 'intermediate' }
      ] as ISession[];

      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
      expect(component.visibleSessions[0].level || component.visibleSessions[1].level).toBe('intermediate');
    });

    it('Should sort the sessions correctly', () => {
      component.sessions =  [
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 3', level: 'intermediate' },
        { name: 'session 2', level: 'beginner' }
      ] as ISession[];

      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[0].name).toBe('session 1');
      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  });
});
