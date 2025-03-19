/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')


//Cenário: Usuário envia e assina um template HTML
    //Dado que eu estou logado na plataforma
    //Quando eu envio um template HTML para preenchimento
    //E eu assino o documento
    //Então eu verifico se o documento foi enviado com sucesso


describe('Deve realizar o envio de Template HTML', () => {
    // Configuração global para a suite de testes
    beforeEach(() => {
      cy.viewport(1280, 720); // Define a resolução antes de cada teste
      // Ignora erros específicos relacionados a iframes e outros uncaught exceptions
      cy.on('uncaught:exception', (err, runnable) => {
        return false; // Ignora o erro e não falha o teste
      });
    });
  
    it('Deve fazer o envio de Template HTML', () => {
      cy.visit('/desk');
      cy.get('#Email').type(perfil.email);      //Login recebendo massa de dados de fixtures
      cy.get('#Passwd').type(perfil.senha);    //Login recebendo massa de dados de fixtures
      cy.get('#logar').click();
      cy.get('#liCofre_1053463 > a').click()
      cy.get('#botao-analyzer').click()
      cy.get('.x > [aria-hidden="true"]').click()
      cy.get('#btnNovoDoc').click()
      cy.get('.open > .dropdown-menu > :nth-child(5) > a').click()
      cy.get('.x > [aria-hidden="true"]').click()
      cy.get('#keyt_marca').type('RANDOM')
      cy.get('#keyt_laranja').type('RANDOM')
      cy.get('#keyt_cor').type('RANDOM')
      cy.get('#keyt_trueFALSE').type('RANDOM')
      cy.get('#keyt_rua').type('RANDOM')
      cy.get('#keyt_lugares').type('RANDOM')
      cy.get('#keyt_restaurant').type('RANDOM')
      cy.get('#btnSaveTemplate').click()
      cy.wait(8000)
      cy.get('#botao-analyzer').click()
      cy.get('.pull-left > .btn').click()
      cy.get('.p-sm > div.text-center > :nth-child(1) > a').click()
      cy.get('#enviar-para-assinatura').click()
      cy.get('#btnSalvarDocumento').click()
      cy.wait(2000)
      cy.get('.label-success').should('exist')
      cy.wait(2000)
      cy.screenshot()

    });
});