import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('url git', () => {
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    cy.get('#navLogon > .nav-link').click()

})

Given('dataları kullanarak sayfaya gir', (dataTable) => {
    cy.get('#UserName').type(dataTable.rawTable[1][0])
    cy.get('#Password').type(dataTable.rawTable[1][1])
})

Given('login butonuna tikla', () => {
    cy.get('#btnSubmit').click()
})

Then('sayfaya girildigini onayla', () => {
    cy.get('.username').should('contain.text', 'manager')
})