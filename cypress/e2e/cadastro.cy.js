/// <reference types="cypress" />

// funcionalidade
describe("Cadastro", () => {

    it("Cadastro com sucesso", () => {

        cy.visit("https://automationpratice.com.br")
        cy.get('.right_list_fix > :nth-child(2) > a').click();

        cy.get('#user').type('Kervin Delan');
        cy.get('#email').type('kervin@qazando.com');
        cy.get('#password').type('12345678');

        cy.get('#btnRegister').click();

        cy.get('#swal2-title').should("be.visible");
        cy.get('#swal2-title').should("have.text", "Cadastro realizado!");
    });

    //cenarios
    it("Cadastro com nome vazio", () => {

        cy.visit("https://automationpratice.com.br")
        cy.get('.right_list_fix > :nth-child(2) > a').click();

        cy.get('#email').type('kervin@qazando.com');
        cy.get('#password').type('12345678');

        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName').should("have.text", "O campo nome deve ser prenchido");
    });

    //cenarios
    it("Cadastro com email vazio", () => {

        cy.visit("https://automationpratice.com.br")
        cy.get('.right_list_fix > :nth-child(2) > a').click();

        cy.get('#user').type('Kervin Delan');
        cy.get('#password').type('12345678');

        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName').should("have.text", "O campo e-mail deve ser prenchido corretamente");
    });

    it("Cadastro com email inválido", () => {

        cy.visit("https://automationpratice.com.br")
        cy.get('.right_list_fix > :nth-child(2) > a').click();

        cy.get('#user').type('Kervin Delan');
        cy.get('#email').type('kervin@qazando');
        cy.get('#password').type('123456');
        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName').should("have.text", "O campo e-mail deve ser prenchido corretamente");
    });

    it("Cadastro com senha inválida", () => {

        cy.visit("https://automationpratice.com.br")
        cy.get('.right_list_fix > :nth-child(2) > a').click();

        cy.get('#user').type('Kervin Delan');
        cy.get('#email').type('kervin@qazando.com');
        cy.get('#password').type('12345');

        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName').should("have.text", "O campo senha deve ter pelo menos 6 dígitos");
    });

    it("Cadastro com senha vazia", () => {

        cy.visit("https://automationpratice.com.br")
        cy.get('.right_list_fix > :nth-child(2) > a').click();

        cy.get('#user').type('Kervin Delan');
        cy.get('#email').type('kervin@qazando.com');

        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName').should("have.text", "O campo senha deve ter pelo menos 6 dígitos");
    });
});