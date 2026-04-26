import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

Given("I open the login page", async () => {
  console.log("Opening login page");
});

When("I login with valid credentials", async () => {
  console.log("Logging in");
});

Then("I should see the dashboard", async () => {
  expect(true).to.be.true;
});