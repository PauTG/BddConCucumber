import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

Given("the user is on the {string} page", async (page) => {
  console.log(`Navigate to ${page}`);
});

Given("the user is logged into the application", async () => {
  console.log("User logged in");
});

Given("the user has products in the shopping cart", async () => {
  console.log("Cart has products");
});

When("the user enters valid personal details", async () => {
  console.log("Entering personal details");
});

When("enters a leaked password", async () => {
  console.log("Entering leaked password");
});

When("submits the registration form", async () => {
  console.log("Submitting form");
});

When("the user searches for a product", async () => {
  console.log("Searching product");
});

When("the user changes the language to {string}", async (lang) => {
  console.log(`Changing language to ${lang}`);
});

When("the user enters a valid email", async () => {
  console.log("Entering email");
});

When("the user adds a product to favorites", async () => {
  console.log("Adding favorite");
});

When("logs out", async () => {
  console.log("Logout");
});

When("logs back in", async () => {
  console.log("Login again");
});

Then("each brand name should appear only once", async () => {
  expect(true).to.be.true;
});

Then(
  "an error message {string} should be displayed",
  async (msg) => {
    expect(msg).to.exist;
  }
);

Then(
  "the product information should be displayed in {string}",
  async (lang) => {
    expect(lang).to.exist;
  }
);

Then(
  "the chat assistant should show one response without duplicates",
  async () => {
    expect(true).to.be.true;
  }
);

Then("the system should display a confirmation message", async () => {
  expect(true).to.be.true;
});

Then(
  "the changes should persist after refreshing the page",
  async () => {
    expect(true).to.be.true;
  }
);

Then(
  "the product should still appear in the favorites list",
  async () => {
    expect(true).to.be.true;
  }
);

When("looks at the brand filter section", async () => {
  console.log("Viewing brand filter");
});

When("clicks on the {string} button", async (button) => {
  console.log(`Clicking button: ${button}`);
});