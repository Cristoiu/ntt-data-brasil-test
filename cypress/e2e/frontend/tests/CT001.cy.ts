describe('Testes de logins no sistema', function () {
  before(function () {
    let visit = cy.visit('/');
    return visit;
  });

  it('Teste de validação de campos no sistema', function () {
    const data = ['Email é obrigatório', 'Password é obrigatório'];
    cy.get('[data-testid="entrar"]').click();
    for (let index = 0; index < data.length; index++) {
      const dataCheck = data[index];
      cy.contains(dataCheck);
    };
  });
});
