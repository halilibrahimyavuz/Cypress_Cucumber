import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('url git', () => {

    cy.visit('https://www.google.com/')    
})

Given('arama yapilacak {string}', (capitals) => {

    cy.get('.gLFyf').type(capitals)

    //cy.get('.FPdoLc > center > .gNO89b').click()
    cy.get('.FPdoLc > center > .gNO89b').click({force:true})
    // click te problem olurasa click({force:true}) kullanılacak
})

Given('arama yapildigini kontrol et {string}', (capitals) => {

    cy.title().should('include', capitals)  //1. asseert    
    cy.get('[name="q"]').should('have.value',capitals)  //2. assert
    
})
