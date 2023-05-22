Feature: Login

    Scenario Outline: Scenario Outline name: Login testYou dashboard
        Given User is on Login page
        When User enters '<Username>'
        Then User enters pass '<password>'
        And click on login Button
        Then Print the Contact '<Mobile_No>'
        Then Validate User in on dashboard
        Examples:
            | Username | password | Mobile_No  |
            | Admin    | admin123 | 9881966732 |
            | Admin    | admin123 | 9309181402 |