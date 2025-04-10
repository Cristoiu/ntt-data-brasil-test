describe('Testes de logins no sistema', function () {
  before(function () {
    let visit = cy.visit('/');
    return visit;
  });

  it('Teste de login com senha incorreta no sistema', function () {
    const email = 'usuariocadastrado@exemplo.com';
    const password = '1234';
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="senha"]').type(password);
    cy.get('[data-testid="entrar"]').click();
    cy.contains('Email e/ou senha inválidos');
  });
});
