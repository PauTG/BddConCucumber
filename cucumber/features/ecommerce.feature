@ui
Feature: E-commerce core functionality

  @regression @registration
  Scenario: Registration fails when using a leaked password
    Given the user is on the "registration" page
    When the user enters valid personal details
    And enters a leaked password
    And submits the registration form
    Then an error message "password is not allowed" should be displayed


  @smoke @catalog
  Scenario: Brand filter should not show duplicate names
    Given the user is on the "catalog" page
    When the user searches for a product
    And looks at the brand filter section
    Then each brand name should appear only once


  @checkout
  Scenario: User should be able to go back in checkout steps
    Given the user has products in the shopping cart
    When the user starts the checkout process
    And goes to the next checkout step
    Then the user should be able to go back to the previous step


  @i18n
  Scenario: Product information should change with selected language
    Given the user is on the "home" page
    When the user changes the language to "Spanish"
    And opens a product page
    Then the product information should be displayed in "Spanish"


  @chat
  Scenario: Chat assistant should not duplicate responses
    Given the user is on the "catalog" page
    When the user opens the chat assistant
    And selects the "Find a product" option
    Then the chat assistant should show one response without duplicates


  @smoke @auth
  Scenario: User should see confirmation after password reset request
    Given the user is on the "forgot password" page
    When the user enters a valid email
    And clicks on the "Set New Password" button
    Then the system should display a confirmation message


  @profile
  Scenario: Profile changes should be saved after update
    Given the user is logged into the application
    When the user goes to the profile page
    And updates personal information
    And clicks on the "Update profile" button
    Then the changes should persist after refreshing the page


  @favorites
  Scenario: Favorite products should stay saved after logout
    Given the user is logged into the application
    When the user adds a product to favorites
    And logs out
    And logs back in
    Then the product should still appear in the favorites list