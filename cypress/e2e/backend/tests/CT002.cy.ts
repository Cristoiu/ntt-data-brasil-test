import Requests from "../../../e2e/backend/classes/requests/GET/requests.get";
import utils from "../classes/utils/utils";
describe('GET Requests Tests', function () {
  let id: any;
  it('GET Request Call userId - Failed', function () {
    id = '0AhvE0IpYrVmrdaP';
    return Requests.getInvalidUserId(id).then(() => {
      cy.get('@getInvalidUserId').its('status').then((r) => {
          expect(r).to.be.equal(400);
          utils.validateHttpSuccess(r);
        });
      cy.get('@getInvalidUserId').its('body').then((r) => {
          const message = 'Usuário não encontrado';
          utils.validateField(r);
          cy.contains(message);
        });
    });
  });
});
