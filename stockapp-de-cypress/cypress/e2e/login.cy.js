describe('login', () => {
    beforeEach(() => {
<<<<<<< HEAD
        cy.visit('http://localhost:3000/')
        cy.viewport(1200, 1200);
    })
    it('login test', () => {
        cy.url().should('include', '/')
        cy.get('[data-test="loginHeader"]').contains("Login").should('be.visible')
        cy.get('[data-test="emailLogin"]').should('be.visible').type("asptest1@gmaail.com")
        cy.get('[data-test="passwordLogin"]').should('be.visible').type("Clarusway1.")
        cy.get('[data-test="sbmtLogin"]').should('be.visible').click({force: true})
        cy.url().should('include', '/stocks')





    })

})
=======
      cy.visit('http://localhost:3000/')
      cy.viewport(1200, 1200)
      
    })
    it('login test', ()=> {
        cy.url().should('include', '/')
        cy.get('[data-test="loginHeader"]').contains("Login").should('be.visible')
        cy.get('[data-test="emailLogin"]').should('be.visible').type("salih76767676@hotmail.com")
        cy.get('[data-test="passwordLogin"]').should('be.visible').type("123456Qwe+")
        cy.get('[data-test="LoginSbmtButton"]').should('be.visible').click({force: true})
        cy.url().should('include', '/stock')
    })
    
  })
>>>>>>> 92efccf (cypress used for login and register testing)
