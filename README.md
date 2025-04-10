# Projeto de Testes

Este repositório contém os testes realizados para a [NTT DATA BRASIL]. O objetivo deste projeto é validar as funcionalidades e o comportamento do front-end e back-end.

## Estrutura do Projeto

- **tests/**: Diretório contendo os scripts de testes automatizados.
- **scenarios/**: Documentação adicional sobre os cenários utilizados.

## Como Rodar os Testes

1. Clone este repositório para sua máquina local:
   ```bash
   git clone https://github.com/Cristoiu/ntt-data-brasil-test.git 
   ````
2. Instale as dependências:
    ```bash
   npm install cypress --save-dev
   ````
3. Execute os testes:
    ```bash
   npx cypress open - modo interface
   npx cypress run - modo terminal
   ````

## Tecnologias Utilizadas
* TypeScript: Linguagem utilizada para o desenvolvimento dos testes.

* Cypress: Framework de testes automatizados utilizado para rodar os testes.

* NodeJS: Motor para rodar o cypress

* Docker: Utilizado para rodar imagem do cypress dentro do workflow do github actions.

