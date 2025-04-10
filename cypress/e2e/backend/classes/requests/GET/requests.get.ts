import IRequestsGet from "../../../interfaces/requests/GET/requests.get.interface";
const api = 'https://serverest.dev/';
class RequestsGet implements IRequestsGet {
  getUserId(id: string) {
      return cy.api({
        method: 'GET',
        url: `${api}usuarios/${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      }).as('getUserId');
  };
  getInvalidUserId(id: string) {
    return cy.api({
      failOnStatusCode: false,
      method: 'GET',
      url: `${api}usuarios/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).as('getInvalidUserId');
};
};
export default new RequestsGet();


