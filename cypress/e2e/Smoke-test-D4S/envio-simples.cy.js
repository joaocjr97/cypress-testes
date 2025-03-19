/// <reference types="cypress" />

//Cenário: Fazer login e enviar um documento para assinatura
    //Dado que eu estou fazendo login na plataforma
    //E eu acesso o cofre
    //Quando eu envio um documento
    //E eu envio o documento para assinatura
    //Então o documento deve ser enviado com sucesso


describe('Deve realizar um envio simples', () => {
    beforeEach(() => {
        cy.viewport(1280, 720); // Define a resolução antes de cada teste
        // Ignora erros específicos relacionados a iframes e outros uncaught exceptions
        cy.on('uncaught:exception', (err, runnable) => {
          return false; // Ignora o erro e não falha o teste
        });
      });

      it('Dado que eu acesse a Dashboad, quero realizar um envio simples', () => {
        cy.visit('https://stage.d4sign.com.br');
      cy.get('#Email').type('automacao@d4sign.com.br');
      cy.get('#Passwd').type('d4sign123');
      cy.get('#logar').click();
      cy.get('#liCofre_1053463 > a').click()
      cy.wait(1000)
      cy.get('#botao-analyzer').click()
      cy.get('.x > [aria-hidden="true"]').click()
      cy.get('#btnNovoDoc').click()
      cy.get(':nth-child(1) > .font-bold').click()
      cy.get('#formUpload').click()
      cy.get('input[type="file"]').attachFile('documento.docx'); //Documento armazenado na pasta Fixtures.
      cy.wait(15000)
      cy.get('.p-sm > div.text-center > :nth-child(1) > a').click()
      .reload()
      cy.get('#enviar-para-assinatura').click()
      cy.get('#btnSalvarDocumento').click()
      cy.get('.label-success').should('contain', 'AGUARDANDO ASSINATURAS')
      .screenshot()

    });
});

