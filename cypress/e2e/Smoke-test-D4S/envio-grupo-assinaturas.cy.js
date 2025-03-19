/// <reference types="cypress" />

//Cenário: Enviar um documento para assinatura
    //Dado que eu acessei a plataforma
    //E eu fiz login na plataforma
    //Quando eu procuro pelo cofre
    //E o cofre possui um Grupo de Assinaturas cadastrado
    //E eu envio o documento para assinatura
    //Então eu devo fazer uma asserção sobre o envio
    //E eu tiro um print da tela

describe('Deve realizar um envio com Grupo de Assinaturas', () => {
    beforeEach(() => {
        cy.viewport(1280, 720); // Define a resolução antes de cada teste
        // Ignora erros específicos relacionados a iframes e outros uncaught exceptions
        cy.on('uncaught:exception', (err, runnable) => {
          return false; // Ignora o erro e não falha o teste
        });
      });

      it('Dado que eu acesse a Dashboad, quero realizar com Grupo de Assinaturas', () => {
        cy.visit('https://stage.d4sign.com.br');
      cy.get('#Email').type('automacao@d4sign.com.br');
      cy.get('#Passwd').type('d4sign123');
      cy.get('#logar').click();
      cy.get('#q3').type('cofre')
      cy.get('#q3').focus().type('{enter}');
      cy.get('#liCofre_853974 > a').click()
      cy.get('#btnNovoDoc').click()
      cy.get(':nth-child(1) > .font-bold').click()
      cy.get('#formUpload').click()
      cy.get('input[type="file"]').attachFile('documento.docx'); //Documento armazenado na pasta Fixtures.
      cy.wait(15000)
      cy.get('#enviar-para-assinatura').click()
      cy.get('#btnSalvarDocumento').click()
      cy.get('.label-success').should('contain', 'AGUARDANDO ASSINATURAS')
      .screenshot()

    });

});