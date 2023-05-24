import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'

Given('Visit the Ecommerce Site',()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

When('Search the product starts with {string}',(keyword)=>{
    cy.get('.search-keyword').type(keyword)
    cy.get('.search-button').click()
})

Then('Add {string} in the cart',(product)=>{
    cy.get('h4[class="product-name"]').each((el,index)=>{
        cy.log(el.text())
         let pro = el.text().replace('- 1 Kg','').trim()
    //    // cy.log(pro)
         //cy.wait(3000)
        if(pro == product){
            cy.get('.product-action >button').eq(index).click()
        }
    })
})

Then('Click on cart icon and Proceed to checkout',()=>{
    cy.get('.cart-icon').click()
    cy.get('.action-block >button').first().click()
})

And('Click on place order',()=>{
    cy.contains('Place Order').click()
})

Then('Select country and check condition tab',()=>{
    cy.get('select').select('India')
    cy.get('[type="checkbox"]').check()
})

And('Click on Proceed',()=>{
    cy.get('button').click()
})

And('Validate the Sucessfull msg',()=>{
    cy.contains(`Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!`).should('be.visible')
})