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
        //cy.log(typeof(el.text()))
        let pro = el.text().replace('- 1 Kg','').trim()
       // cy.log(pro)
        cy.wait(3000)
        if(pro == product){
            cy.get('.product-action >button').eq(index).click()
        }
    })
})