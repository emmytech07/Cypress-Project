/// <reference types="cypress" />


describe("learn about locators", () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://www.google.com')
    })
    it("can locate a button on the page", () =>{
        cy.get("input[title='Search']", { timeout: 10000 })
        .should('be.visible')
        .and('have.class', "gLFyf")
        .and('value', "")
        .and('have.attr', 'maxlength', '2048');
    });
})