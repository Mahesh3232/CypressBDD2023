import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('I open sauce demo Url',()=>{
    cy.visit('https://www.saucedemo.com/')
})

Then('Fill the Username',()=>{
    cy.get('#user-name').type('standard_user')
})

Then('Fill the password',()=>{
    cy.get('#password').type('secret_sauce')
})

Then('Click on login Button',()=>{
    cy.get('#login-button').click()
})