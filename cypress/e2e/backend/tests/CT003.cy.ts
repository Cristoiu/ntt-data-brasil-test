import Requests from "../../../e2e/backend/classes/requests/POST/requests.post";
import utils from "../classes/utils/utils";
describe('POST Requests Tests', function () {
  it('POST Request Call created user - Success', function () {
    return Requests.postCreateUser().then(() => {
      cy.get('@createUser').its('status').then((r) => {
          expect(r).to.be.equal(201);
          utils.validateHttpFailed(r);
        });
      cy.get('@createUser').its('body').then((r) => {
          const message = 'Cadastro realizado com sucesso';
          utils.validateField(r);
          cy.contains(message);
        });
    });
  });
});
