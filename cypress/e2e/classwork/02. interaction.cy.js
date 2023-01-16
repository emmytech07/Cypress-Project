/// <reference types="cypress" />


describe("interacting with input field", () => {
    beforeEach(() => {

        cy.visit('https://www.google.com')
    })

    it("click on input field", () =>{
        cy.get("[name='q']").click();
        cy.get('.erkvQe > .OBMEnb').should('be.visible')
        .contains("Trending searches")
        // To click outside for search to disapper
        cy.get('.lnXdpd').click()
        cy.get('.erkvQe > .OBMEnb').should('not.be.visible')
        .contains("Trending searches")
    });
})