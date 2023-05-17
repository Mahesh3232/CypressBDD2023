Feature: login functionality

Check the login functionality

Scenario: Validate the login functionality with valid credentials
    Given I open sauce demo Url
    Then Fill the Username
    Then Fill the password
    Then Click on login Button
    # When Validate sucessful login