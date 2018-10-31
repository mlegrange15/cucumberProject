Feature: Do websites match my search terms on Google?

  Background:
    Given I am on google.com

@tag1
  Scenario: Successful search and website matches found
    When I add a "Michael" term to the search field
    And click search
    Then I should be displayed with results that have links to matching websites

@tag2
  Scenario: Unsuccessful search and no website matches found
    When I add a "jdfjdsnfjdsfddbbbbdduigg" term to the search field
    And click search
    And get no results displayed
    Then it should be communicated that search has no links to matching websites