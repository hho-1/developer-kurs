describe("dashboard-test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.viewport(1200, 1200);
    });

    it("dashboard", () => {
        cy.login()
        cy.get("[data-test='logoutBtn']").contains("Logout").should("be.visible");
        cy.get("[data-test='dashboardHeader']").contains("Dashboard").should("be.visible");
        cy.get("[data-test='titleDashboard']").contains("Dashboard").should("be.visible");
        cy.get("[data-test='titlePurchase']").contains("Purchase").should("be.visible");
        cy.get("[data-test='titleSales']").contains("Sales").should("be.visible");
        cy.get("[data-test='titleFirms']").contains("Firms").should("be.visible");
        cy.get("[data-test='titleBrands']").contains("Brands").should("be.visible");
        cy.get("[data-test='titleProducts']").contains("Products").should("be.visible");
        cy.get("[data-testid='ShoppingCartIcon']").should("be.visible");




    });
});