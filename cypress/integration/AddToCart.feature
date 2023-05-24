Feature: Add to cart functionality


        Scenario: Add to Cark Functionality
                Given Visit the Ecommerce Site
                When Search the product starts with "Ca"
                Then Add "Carrot" in the cart
                Then Click on cart icon and Proceed to checkout
                And Click on place order
                Then Select country and check condition tab
                And Click on Proceed
                And Validate the Sucessfull msg