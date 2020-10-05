/// <reference types="cypress" />

context('Book store', () => {
    beforeEach(() => {
        cy.visit('books')
    })

    it('Search Book', () => {
        cy.get('#searchBox').should('be.visible')
        cy.get('#searchBox').type('git')
        cy.get('.rt-table').get('.rt-tbody').children().first()
            .should('contain.text', 'Git')
    })

    it('Navigate to book description', () => {
        cy.get('#searchBox').should('be.visible');
        cy.get('#searchBox').type('git');
        cy.get('.rt-table').get('.rt-tbody').children().first()
            .find('a').click()
        cy.get('#ISBN-label').parent().siblings().should('not.have.text', '')
    })
})  