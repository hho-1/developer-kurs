describe("products-test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.viewport(1200, 1200);
    });

    it("products", () => {
        cy.login();
        cy.get("[data-test='titlePurchase']")
            .contains("Purchase")
            .should("be.visible")
            .click({ force: true });
        cy.get("[data-test='purchaseHeader']")
            .contains("Purchase")
            .should("be.visible");

        cy.get("[data-test='purchaseBtn']", { timeout: 20000 })
            .contains("New Purchase")
            .should("be.visible")
            .click({ force: true });
        cy.get("[data-test='purchaseFirm']", { timeout: 20000 }).contains(
            "Firm"
        );
        cy.get('#mui-component-select-firm_id').click({ force: true });
        cy.get("[data-test='firmName']").first().click({ force: true });
        cy.get("[data-test='purchaseBrand']", { timeout: 20000 }).contains(
            "Brand"
        );
        cy.get('#brand-select').click({ force: true });
        cy.get("[data-test='brandName']").first().click({ force: true });
        cy.get("[data-test='salesProduct']").contains("Product");
        cy.get('#product-select').click({ force: true });
        cy.get("[data-test='productName']").first().click({ force: true });
        cy.get('#quantity')
            .should("be.visible")
            .click({ force: true })
            .type("1")
        cy.get('#price')
            .should("be.visible")
            .click({ force: true })
            .type("20");

        cy.get("[data-test='purchaseSbmt']")
            .contains("Add New Purchase")
            .should("be.visible")
            .click({ force: true });
        cy.get(
            '[aria-colindex="2"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle'
        ).should("be.visible");
        cy.get(
            '[tabindex="0"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle'
        ).should("be.visible");
        cy.get(
            '[aria-colindex="4"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle'
        ).should("be.visible");
        cy.get('[aria-colindex="4"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle')
            .should("be.visible");
        cy.get(
            '[aria-colindex="6"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle'
        ).should("be.visible");
        cy.get("[data-testid='DeleteIcon']")
            .should("be.visible")
            .first()
            .click({ force: true });
    });
});
