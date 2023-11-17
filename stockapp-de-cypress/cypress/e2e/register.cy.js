describe('register', () => {
<<<<<<< HEAD
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1200, 1200);
  })
=======
<<<<<<< HEAD
>>>>>>> 92efccf (cypress used for login and register testing)
  it('register test', () => {
=======
  it('register pass', () => {
>>>>>>> 7f4ccdd (cypress used for login and register testing)
    cy.visit('http://localhost:3000/')
    cy.url().should('include', '/')
    cy.get('[data-test="registerLink"]').contains("Don't have an account? Sign Up").click({force: true})
    cy.url().should('include', '/register')
    cy.get('[data-test="registerHeader"]').contains("Register").should('be.visible')
<<<<<<< HEAD
    cy.get('[data-test="userName"]').should('be.visible').type("asptest2")
    cy.get('[data-test="firstName"]').should('be.visible').type("asp2")
    cy.get('[data-test="lastName"]').should('be.visible').type("test2")
    cy.get('[data-test="email"]').should('be.visible').type("asptest2@gmaail.com")
    cy.get('[data-test="password"]').should('be.visible').type("Clarusway1.")
    cy.get('[data-test="password2"]').should('be.visible').type("Clarusway1.")
    cy.get('[data-test="submitRegister"]').should('be.visible').click({force: true})
    cy.url().should('include', '/stocks')
    


  })
<<<<<<< HEAD

=======
  
=======

    cy.get('[data-test="registerUsername"]').should('be.visible').type("salih76192")

    cy.get('[data-test="registerFirstname"]').should('be.visible').type("salih2")
    cy.get('[data-test="registerLastname"]').should('be.visible').type("sari2")
    cy.get('[data-test="registerEmail"]').should('be.visible').type("salih76767676@hotmail.com")
    cy.get('[data-test="registerPassword"]').should('be.visible').type("123456Qwe+")
    cy.get('[data-test="registerPasswordAgain"]').should('be.visible').type("123456Qwe+")
    cy.get('[data-test="RegisterSubmitButton"]').should('be.visible').click()
    cy.url().should('include', 'st')
  })
>>>>>>> 7f4ccdd (cypress used for login and register testing)
>>>>>>> 92efccf (cypress used for login and register testing)
})