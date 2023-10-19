describe("products-test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.viewport(1200, 1200);
    });

    it("products", () => {
        cy.login();
        cy.get("[data-test='titleSales']")
            .contains("Sales")
            .should("be.visible")
            .click({ force: true });
        cy.get("[data-test='salesHeader']")
            .contains("Sales")
            .should("be.visible");

        cy.get("[data-test='salesBtn']", { timeout: 20000 })
            .contains("New Sale")
            .should("be.visible")
            .click({ force: true });
        cy.get("[data-test='salesBrand']", { timeout: 20000 }).contains(
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
            .type("2")
        cy.get('#price')
            .should("be.visible")
            .click({ force: true })
            .type("20");

        cy.get("[data-test='salesSbmt']")
            .contains("Add New Sale")
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
