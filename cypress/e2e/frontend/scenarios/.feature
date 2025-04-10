Feature: Autenticação de Usuário

  Background:
    Given que estou na página de login

  Scenario: Login validação de todos os campos CT001
    When eu não preencho o campo de email 
    And não preencho o campo de senha
    And clico no botão "Entrar"
    Then não devo ser autenticado com sucesso
    And o sistema deve validar os campos

  Scenario: Login com senha incorreta CT002
    When eu preencho o campo de email com "usuariocadastrado@exemplo.com"
    And preencho o campo de senha com "senha_incorreta"
    And clico no botão "Entrar"
    Then devo ver uma mensagem de erro informando "Usuário e/ou senha inválidos"

  Scenario: Login com email não cadastrado CT003
    When eu preencho o campo de email com "naoexiste@exemplo.com"
    And preencho o campo de senha com "senha123"
    And clico no botão "Entrar"
    Then devo ver uma mensagem de erro informando "Usuário e/ou senha inválidos"
