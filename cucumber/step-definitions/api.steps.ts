import { Given, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import axios from "axios";

let statusCode: number;

Given("I call the users endpoint", async function () {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  statusCode = response.status;
});

Then("the response status should be {int}", function (status: number) {
  expect(statusCode).to.equal(status);
});