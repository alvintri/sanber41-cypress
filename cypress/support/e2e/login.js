describe('E2E Login to inventory', () => {

    it('input valid username dan password then Login', () => {

      cy.visit('https://www.saucedemo.com')

 

      cy.get('#user-name').type("standard_user")

      cy.get('#password').type("secret_sauce")

      cy.get("#login-button").click()

 

      // Should be on a new URL which

      // includes '/inventory.html'

      cy.url().should('include', '/inventory.html')

    })

  })

describe("Open Kasir AJA URL", ()=>{
    it('should contain url /login', ()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login')
    })

    it('user success login to kasir Aja', ()=>{
        //Open kasir aja login page
        cy.visit('https://kasirdemo.belajarqa.com')
        //cy.url().should('include', '/login')

        //Input username and password
        cy.get('#email').type("trial2-toko@gmail.com")
        cy.get('#password').type("password")

        //Click login
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

        //Assert dashboard page after login
        cy.url().should('include','/dashboard')
        cy.contains("kasirAja")
    })
})