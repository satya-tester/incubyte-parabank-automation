Feature: ParaBank Registration
  Scenario: Register a new customer and print account balance
    Given User opens ParaBank website
    When User clicks on Register link
    And User fills the registration form
    And User submits the registration details
    And User clicks on Accounts Overview
    Then User should see the account balance
    