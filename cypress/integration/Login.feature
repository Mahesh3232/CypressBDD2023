Feature: login functionality

Check the login functionality

Scenario: Validate the login functionality with valid credentials
    Given I open sauce demo Url
    When Fill the Username
    Then Fill the password
    Then Click on login Button
    And Validate sucessful login.
@focus
Scenario: Validate the login functionality with invalid credentials
    Given I open sauce demo Url.
    When Fill the Username.
    And Fill the password.
    Then Click on login Button.
    # And Validate unsucessful login.