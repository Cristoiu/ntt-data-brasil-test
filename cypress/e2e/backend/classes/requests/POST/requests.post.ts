import IRequestsPost from "../../../interfaces/requests/POST/requests.post.interface";
import { Faker, pt_BR } from '@faker-js/faker';
const faker = new Faker({ locale: [pt_BR] });
const api = 'https://serverest.dev/';
const email = faker.internet.email();
class RequestsPost implements IRequestsPost {
  postCreateUser() {
    return cy.api({
      method: 'POST',
      url: `${api}usuarios`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        nome: 'Fulano da Silva',
        email: email,
        password: 'teste',
        administrador: 'true',
      },
    }).as('createUser');
  };
};
export default new RequestsPost();
