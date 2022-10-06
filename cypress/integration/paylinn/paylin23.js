import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('url git', () => {
    cy.visit('https://paylinn.com/')
})

And('login tikla', () => {
    cy.get('[href="/login"] > .header__option > .header__lineTwo')
    .click()   
})

And('username ve password gir', () => {
    cy.get('[name="username"]').type('User')
    cy.get('[name="password"]').type('user') 
})

And('login butonuna tikla', () => {
    cy.get('.MuiButton-label').click()   
})

And('giris yapildigini onayla', () => {
    cy.get('.header__nav > :nth-child(1) > .header__lineOne')
    .should('contain.text', 'Welcome')  
})