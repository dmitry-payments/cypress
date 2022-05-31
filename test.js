Cypress.on('uncaught:exception', (err, r) => {
    return false;
})
describe('my test', () => {
    it ('visit sibnet.ru', () => {
        cy.visit('https://www.sibnet.ru')
        cy.get('.sibnet-head__region').find('.sibnet-head__anonymous-text').click()
        cy.get('button.b-submit')
        cy.get('input[name=login]').type('qa-tester')
        cy.get('input[name=password]').type('qa-tester').type('{enter}')
        cy.visit('https://www.sibnet.ru/profile/edit')
        cy.get('input[name=email]').invoke('attr', 'value').should('eq', 'pp-sansip@yandex.kz')
    })
})