/// <reference types="cypress" />

// funcionalidade
describe("Login", () => {

    //cenarios
    
    it("Login com sucesso", () => {

        cy.visit("https://automationpratice.com.br/login");

        cy.get('#user').type('edu@qazando.com');
        cy.get('#password').type('123456');

        cy.get('#btnLogin').click();

        cy.get('#swal2-title').should("be.visible");
        cy.get('#swal2-title').should("have.text", "Login realizado");
    });

    it("Logout com sucesso", () => {

        cy.visit("https://automationpratice.com.br/login");

        cy.get('#user').type('edu@qazando.com');
        cy.get('#password').type('123456');

        cy.get('#btnLogin').click();

        cy.get('#swal2-title').should("be.visible");
        cy.get('#swal2-title').should("have.text", "Login realizado");

        cy.get('.swal2-confirm').click();
        cy.get('.nav > :nth-child(6) > a').click();

        cy.get('#swal2-title').should("be.visible");
        cy.get('#swal2-title').should("have.text", "Logout Sucessfull");
    });

    it("Email invalido", () => {

        cy.visit("https://automationpratice.com.br/login");
        cy.get('#user').type('edu@.com');
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should("have.text", "E-mail inválido.");
    });

    it("Senha invalida", () => {

        cy.visit("https://automationpratice.com.br/login");
        cy.get('#user').type('edu@qazando.com');
        cy.get('#password').type('123');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should("have.text", "Senha inválida.");
    });

    it("Email vazio", () => {

        cy.visit("https://automationpratice.com.br/login");
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should("have.text", "E-mail inválido.");
    });

    it("Senha vazia", () => {

        cy.visit("https://automationpratice.com.br/login");
        cy.get('#user').type('edu@qazando.com');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should("have.text", "Senha inválida.");
    });


});