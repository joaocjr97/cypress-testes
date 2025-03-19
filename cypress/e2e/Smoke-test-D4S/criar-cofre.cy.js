/// <reference types="cypress" />

//Cenário: Criar um novo cofre na plataforma
  //Dado que eu acesso a plataforma com minhas credenciais
  //Quando eu clico em "Criar novo cofre"
  //E eu digito o nome do novo cofre
  //Então eu devo fazer uma asserção sobre o cofre criado


describe('Deve criar um novo cofre com sucesso', () => {
    beforeEach(() => {
        cy.viewport(1280, 720); // Define a resolução antes de cada teste
        // Ignora erros específicos relacionados a iframes e outros uncaught exceptions
        cy.on('uncaught:exception', (err, runnable) => {
          return false; // Ignora o erro e não falha o teste
        });
      });

      it('Criando um cofre com sucesso', () => {
        cy.visit('https://stage.d4sign.com.br');
        cy.get('#Email').type('automacao@d4sign.com.br');
        cy.get('#Passwd').type('d4sign123');
        cy.get('#logar').click();
        cy.wait(2000)
        cy.get('span.texto_menu > .btn').click() //Botão de criar novo cofre
        cy.wait(2000)
        cy.get('#nomeCofre').type('Cofre de testes D4S')   
        cy.wait(2000)
        cy.get('#btnSalvarCofre').click()   
        cy.wait(2000)
        cy.get('h5.color-link > .color-link').should('contain', 'Cofre de testes D4S')
        cy.screenshot()
    });
});