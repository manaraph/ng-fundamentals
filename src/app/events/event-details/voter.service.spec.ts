import { VoterService } from "./voter.service";
import { ISession } from "../shared/event.model";
import { of } from 'rxjs/internal/observable/of';

describe('VoterService', () => {
  let voterService: VoterService, mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('Should remove a voter from the list of voters', () => {
      let session = { id: 6, voters: ["joe", "john"]};
      mockHttp.delete.and.returnValue(of(false));
      voterService.deleteVoter(3, <ISession>session, "joe")
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe("john");
    });

    it('Should call http.delete with the right URL', () => {
      let session = { id: 6, voters: ["joe", "john"]};
      mockHttp.delete.and.returnValue(of(false));
      voterService.deleteVoter(3, <ISession>session, "joe")
      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe')
    });
  })

  describe('addVoter', () => {
    it('Should add a voter to the list of voters', () => {
      let session = { id: 6, voters: ["john"]};
      mockHttp.post.and.returnValue(of(false));
      voterService.addVoter(3, <ISession>session, "joe");
      expect(session.voters.length).toBe(2);
      expect(session.voters[1]).toBe("joe");
    });

    it('Should call http.post with the right URL', () => {
      let session = { id: 6, voters: ["john"]};
      mockHttp.post.and.returnValue(of(false));
      voterService.addVoter(3, <ISession>session, "joe");
      expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object));
    });
  });
});