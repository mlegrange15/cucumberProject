const assert = require("assert");
const { expect } = require("chai");
const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;
const { Given, When, Then } = require("cucumber");

const driver = new webdriver.Builder()
  .withCapabilities({ browserName: "chrome" })
  .build();

Given("I am on google.com", function() {
  driver.get("https://www.google.com").then(function() {
    // now wait for the body element to be present
    return driver.findElement(webdriver.By.name("q"));
  });
});

When("I add a {string} term to the search field", function(search) {
  // Write code here that turns the phrase above into concrete actions
  return driver.findElement(webdriver.By.name("q")).sendKeys(search);
});

When("click search", function() {
  // Write code here that turns the phrase above into concrete actions
  return driver.findElement(webdriver.By.name("btnK")).submit();
});

Then(
  "I should be displayed with results that have links to matching websites",
  function() {
    // Write code here that turns the phrase above into concrete actions
    return driver.findElement(By.id("resultStats"));
  }
);

// ***********************************************************

When("get no results displayed", function() {
  // Write code here that turns the phrase above into concrete actions
  return driver.findElement(By.xpath("//*[text()[contains(.,'did not match')]]"));
});

Then(
  "it should be communicated that search has no links to matching websites",
  function() {
    // Write code here that turns the phrase above into concrete actions
    return console.log('this search had no results');
  }
);
