describe("brands-test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.viewport(1200, 1200);
    });

    it("brands", () => {
        cy.login()

        cy.get("[data-test='titleBrands']").contains("Brands").should("be.visible").click({ force: true });
        cy.get("[data-test='brandsHeader']").contains("Brands").should("be.visible");
        cy.get("[data-test='brandsBtn']").contains("New Brand").should("be.visible").click({ force: true });
        cy.get("[data-test='brandsName']").contains("Brand Name").click({ force: true }).type("Test Brand");
        cy.get("[data-test='brandsImage']").contains("Image Url").click({ force: true }).type("https://docs.cypress.io/img/logo/cypress-logo-dark.png");
        cy.get("[data-test='brandsSbmt']").contains("Save Brand").should("be.visible").click({ force: true });
        cy.get("[data-test='brandsCardName']").should("be.visible");
        cy.get("[data-test='brandsCardImage']").should("be.visible");
        cy.get("[data-test='editBtn']").should("be.visible").first().click({ force: true });
        cy.get("input[name='name']").clear().type("Test Firm Edited");
        cy.get("input[name='image']").clear().type("https://docs.cypress.io/img/logo/cypress-logo-dark.png");
        cy.get("[data-test='brandsSbmt']").should("be.visible").click({ force: true });










    });
});