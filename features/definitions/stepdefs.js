const webdriver = require("selenium-webdriver"),
  By = webdriver.By;
const { Given, When, Then } = require("cucumber");

const driver = new webdriver.Builder()
  .withCapabilities({ browserName: "chrome" })
  .build();


Given("I am on google.com", function() {
  driver.get("https://www.google.com").then(function() {
    return driver.findElement(webdriver.By.name("q"));
  });
});

When("I add a {string} term to the search field", function(search) {
  return driver.findElement(webdriver.By.name("q")).sendKeys(search);
});

When("click search", function() {
  return driver.findElement(webdriver.By.name("btnK")).submit();
});

Then(
  "I should be displayed with results that have links to matching websites",
  function() {
    return driver.findElement(By.css("div.r > a[href]" ));
  }
);

// ***********************************************************

Then("I get a message there were no matching websites found", function() {
  return driver.findElement(By.xpath("//*[text()[contains(.,'did not match')]]"));
});
