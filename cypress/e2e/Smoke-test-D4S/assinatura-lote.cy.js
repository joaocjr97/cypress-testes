/// <reference types="cypress" />

const perfil = require('../../fixtures/perfil.json')

    //Cenário: Usuário assina documentos em lote
        //Dado que eu estou logado na plataforma
        //Quando eu clico em "Documentos para assinar"
        //E eu faço a assinatura em lote
        //Então os documentos devem ser assinados com sucesso

  describe('Realizar assinatura em lote', () => {
    // Configuração global para a suite de testes
    beforeEach(() => {
      cy.viewport(1280, 720); // Define a resolução antes de cada teste
      // Ignora erros específicos relacionados a iframes e outros uncaught exceptions
      cy.on('uncaught:exception', (err, runnable) => {
        return false; // Ignora o erro e não falha o teste
      });
    });
  
    it('Deve fazer assinatura em lote', () => {
      cy.visit('/desk/paraassinar.html');
      cy.get('#Email').type('automacao@d4sign.com.br');
      cy.get('#Passwd').type('d4sign123');
      cy.get('#logar').click();
      cy.get('#botao-analyzer').click()
      cy.get('.x > [aria-hidden="true"]').click()
      cy.get('[tabindex="4"] > a').click()
      cy.get('[tabindex="8"] > a').click()
      cy.get('#select_all').click()
      cy.get(':nth-child(3) > .btn').click()
      cy.wait(2000)
      cy.get('#senhaConta').type(perfil.senha)
      cy.get('#btnSalvarAssinatura').click()
    });
});