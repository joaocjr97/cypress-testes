/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')


//Cenário: Fazer login com sucesso na plataforma
  //Dado que eu estou na página de login
  //Quando eu preencho o campo "E-mail" com "automacao@d4sign.com.br "
  //E eu preencho o campo "Senha" com "d4sign123"
  //E eu clico no botão "Entrar"
  //Então eu devo ser redirecionado para a página inicial com sucesso

describe('Login em Stage - D4S', () => {
    // Configuração global para a suite de testes
    beforeEach(() => {
      cy.viewport(1280, 720); // Define a resolução antes de cada teste
      // Ignora erros específicos relacionados a iframes e outros uncaught exceptions
      cy.on('uncaught:exception', (err, runnable) => {
        return false; // Ignora o erro e não falha o teste
      });
    });
  
    it('Deve fazer login com sucesso', () => {
      cy.visit('/desk');
      cy.get('#Email').type(perfil.email);      //Login recebendo massa de dados de fixtures
      cy.get('#Passwd').type(perfil.senha);    //Login recebendo massa de dados de fixtures
      cy.get('#logar').click();
  
      // Adicionar uma asserção para garantir que o login foi bem-sucedido
      cy.url().should('include', '/desk?'); 
    });
  });
  