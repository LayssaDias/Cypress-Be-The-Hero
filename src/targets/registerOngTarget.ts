import Chainable = Cypress.Chainable

const imgBeTheHero = (): Chainable<JQuery> => cy.get('img')

export default { 
    imgBeTheHero
}