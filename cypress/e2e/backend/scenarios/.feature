Feature: Validação de Requisições para Gerenciamento de usuários 

  Scenario: CT001 - Buscar usuário existente com sucesso
    Given que o usuário deseja consultar os dados de um usuário existente
    When o usuário envia uma requisição GET para a URL da API com um identificador válido
    Then o status da resposta deve ser 200 - OK
    And os dados da usuário devem ser retornados corretamente

  Scenario: CT002 - Buscar usuário inexistente
    Given que o usuário deseja consultar um usuário que não existe
    When o usuário envia uma requisição GET para a URL da API com um identificador inválido ou inexistente
    Then o status da resposta deve ser 400 - Bad Request
    And a mensagem de erro deve indicar que a usuário não foi encontrado

  Scenario: CT003 - Criar usuário com sucesso
    Given que o usuário deseja criar um novo usuário   
    And o usuário envia uma requisição POST para a URL da API com dados válidos
    Then o status da resposta deve ser 201 - Created
    And a usuário deve ser criado com sucesso
