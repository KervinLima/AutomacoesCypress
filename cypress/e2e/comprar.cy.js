/// <reference types="cypress" />

// funcionalidade
describe("Comprar produto", () => {

    //cenarios
    it("Adicionar produto ao carrinho", () => {
        cy.viewport(1280, 720); // Define a largura para 1280px e a altura para 720px
        cy.visit("https://automationpratice.com.br");
        cy.get(':nth-child(3) > .search_width > img').click();
        cy.get('form > input').type("Power Pack");
        cy.get('.btn').click();
        cy.get('.swal2-confirm').click();

        cy.get(':nth-child(1) > .product_wrappers_one > .content > .title > a').click();
        cy.get('.customs_sel_box').select('XL');

        cy.get('.links_Product_areas > .theme-btn-one').click();
        cy.get('.swal2-popup').should("be.visible");
        cy.get('.swal2-popup').should("contain.text", "Successfully added to your Cart");

    });

    it("Visualizar carrinho", () => {
        cy.viewport(1280, 720); // Define a largura para 1280px e a altura para 720px
        cy.visit("https://automationpratice.com.br");
        cy.get(':nth-child(3) > .search_width > img').click();
        cy.get('form > input').type("Power Pack");
        cy.get('.btn').click();
        cy.get('.swal2-confirm').click();

        cy.get(':nth-child(1) > .product_wrappers_one > .content > .title > a').click();
        cy.get('.customs_sel_box').select('XL');

        cy.get('.links_Product_areas > .theme-btn-one').click();
        cy.get('.swal2-popup').should("be.visible");
        cy.get('.swal2-popup').should("contain.text", "Successfully added to your Cart");

        cy.get('.col-12 > .header-action-link > :nth-child(2) > .offcanvas-toggle').click();
        cy.get('.offcanvas-cart-action-button > :nth-child(1) > .theme-btn-one').click();
    });

    it.only("Remover produto do carrinho", () => {
        cy.viewport(1280, 720); 
        cy.visit("https://automationpratice.com.br");
        cy.get(':nth-child(3) > .search_width > img').click();
        cy.get('form > input').type("Power Pack");
        cy.get('.btn').click();
        cy.get('.swal2-confirm').click();

        cy.get(':nth-child(1) > .product_wrappers_one > .content > .title > a').click();
        cy.get('.customs_sel_box').select('XL');

        cy.get('.links_Product_areas > .theme-btn-one').click();
        cy.get('.swal2-popup').should("be.visible");
        cy.get('.swal2-popup').should("contain.text", "Successfully added to your Cart");

        cy.get('.col-12 > .header-action-link > :nth-child(2) > .offcanvas-toggle').click();
        cy.get('.offcanvas-cart-action-button > :nth-child(1) > .theme-btn-one').click();

        cy.get(':nth-child(1) > .product_remove > .fa').click({ force: true });
    });
});