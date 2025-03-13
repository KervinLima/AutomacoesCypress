/// <reference types="cypress"/>

describe("Buscar dispositivos", () => {
    it("Buscar dispositivo específico", () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/7",
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal("7");
        });
    });

    it("Buscar dispositivo inexistente", () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/ASUHASHASUASHAUSHAUS",
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body.error).to.equal(
                "Oject with id=ASUHASHASUASHAUSHAUS was not found."
            );
        });
    });

    it("Cadastrar dispositivo", () => {
        cy.request({
            method: "POST",
            url: "https://api.restful-api.dev/objects",
            body: {
                name: "Dispositivo do Finotti",
                data: {
                    year: "2025",
                    price: 4000,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    cor: "amarelo",
                },
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.contain("Dispositivo");
        });
    });
});