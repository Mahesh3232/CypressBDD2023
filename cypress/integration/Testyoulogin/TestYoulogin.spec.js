import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'

Given('User is on Login page',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('User enters {string}',(Username)=>{
    cy.get('[name="username"]').type(Username)
})

Then('User enters pass {string}',(password)=>{
    cy.get('[name="password"]').type(password)
})

And('click on login Button',()=>{
    cy.get('[type="submit"]').click()
})

Then('Print the Contact {string}',(Mobile_No)=>{
    cy.log(Mobile_No)
})

Then('Validate User in on dashboard',()=>{
    cy.get('[alt="client brand banner"]').should('be.visible')
})