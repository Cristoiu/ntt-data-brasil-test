#language: pt

Funcionalidade: Autenticação de Usuário

  Contexto:
    Dado que estou na página de login

  Cenário: Login validação de todos os campos CT001
    Quando eu não preencho o campo de email 
    E  não preencho o campo de senha
    E clico no botão "Entrar"
    Então não devo ser autenticado com sucesso
    E o sistema deve validar os campos

  Cenário: Login com senha incorreta CT002
    Quando eu preencho o campo de email com "usuariocadastrado@exemplo.com"
    E preencho o campo de senha com "senha_incorreta"
    E clico no botão "Entrar"
    Então devo ver uma mensagem de erro informando "Usuário e/ou senha inválidos"

  Cenário: Login com email não cadastrado CT003
    Quando eu preencho o campo de email com "naoexiste@exemplo.com"
    E preencho o campo de senha com "senha123"
    E clico no botão "Entrar"
    Então devo ver uma mensagem de erro informando "Usuário e/ou senha inválidos"
