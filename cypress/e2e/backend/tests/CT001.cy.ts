import Requests from "../../../e2e/backend/classes/requests/GET/requests.get";
import utils from "../classes/utils/utils";
describe('GET Requests Tests', function () {
  let id: any;
  it('GET Request Call userId - Success', function () {
    id = '0AhvE0IpYrVmrdaL';
    return Requests.getUserId(id).then(() => {
      cy.get('@getUserId').its('status').then((r) => {
          expect(r).to.be.equal(200);
          utils.validateHttpFailed(r);
        });
      cy.get('@getUserId').its('body').then((r) => {
          utils.validateField(r);
        });
    });
  });
});
