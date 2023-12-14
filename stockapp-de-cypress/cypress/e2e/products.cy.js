describe("products-test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 1200);
  });

  it("products", () => {
    cy.login();
    cy.get("[data-test='titleProducts']").contains("Products").should("be.visible").click({ force: true });
    cy.get("[data-test='productsHeader']").contains("Products").should("be.visible");

    cy.get("[data-test='productsBtn']", { timeout: 20000 }).contains("New Product").should("be.visible").click({ force: true });
    cy.get("[data-test='productsCat']", { timeout: 20000 }).contains("Category");
    cy.get('[data-test="selectCat"] > #demo-simple-select').click({ force: true });
    cy.get('[data-value="2"]').click({ force: true }); // cypress seçiçi özelliğinde yaralanıldı
    cy.get("[data-test='productsBrands']").contains("Brand");
    cy.get('[data-test="selectBrand"] > #demo-simple-select').click({ force: true });
    cy.get('.MuiList-root > [tabindex="0"]').last().click({ force: true });
    cy.get("#name").should("be.visible").click({ force: true });
    cy.get("#name-label").contains("Product Name").should("be.visible");
    cy.get("[data-test='productsName']").should("be.visible").click({ force: true }).type("Test Product");

    cy.get("[data-test='productsSbmt']")
      .contains("Create Product")
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
    cy.get(
      ".MuiDataGrid-columnHeader--numeric > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer"
    ).should("be.visible");
    cy.get(
      '[aria-colindex="6"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle'
    ).should("be.visible");
    cy.get("[data-testid='DeleteOutlineIcon']")
      .should("be.visible")
      .first()
      .click({ force: true });
  });
});
