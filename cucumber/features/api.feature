@api
Feature: Users API

  Scenario: Get users

    Given I call the users endpoint
    Then the response status should be 200