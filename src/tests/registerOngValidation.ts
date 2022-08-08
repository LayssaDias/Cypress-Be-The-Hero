import { registerOngActions } from "../actions"

describe('Screen Register ONG Be The Hero', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("uries").url_register)
    })  

    it('validating information on screen', () => {
        cy.location('href').should('include', '/register')
        registerOngActions.CreateOng()
    })     
})