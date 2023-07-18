import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given("Visit Green-Kart Site", () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

And("Seach Product which is start from ca", () => {
    cy.get('.search-keyword').type('ca')
    cy.get('[type="submit"]').click()
})

When("Add Carrot to the cart", () => {
    cy.get('h4[class="product-name"]').each((el, i) => {
        // cy.log(el.text())
        if (el.text().replace(' - 1 Kg', ' ').trim() == "Carrot") {
            cy.get('.product-action> button').eq(i).click()
        }
    })
})

And('Place order and select country', () => {
    cy.get('[alt="Cart"]').click()
    cy.get('.action-block > button').first().click()
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('[type="checkbox"]').check()
    cy.contains('Proceed').click()
    //cy.get('button').click()
})

Then("Validate the Thank you message", () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
})