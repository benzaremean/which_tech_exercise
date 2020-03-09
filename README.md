# which.co.uk tech exercise

## Framework

Added the following libraries in addition to the default webdriverio libraries needed

1. **babel** - to allow for writing latest Javascript
2. **chai** - For fluent assertions
3. **wdio-timeline-reporter** (I am the author 5000+ downloads a week) - Great test report feedback. A single html report with screenshots (embedded if you wish) is created at the end of the test run. See documentation [here](https://www.npmjs.com/package/wdio-timeline-reporter)
4. **@wdio/selenium-standalone-service** - To start and stop selenium in line with webdriverio test processes

## Structure

I decided to use Page Object model but modelled sections of the page instead. This would lead to cleaner code and better reuse as I can bet several sections on the page are used elsewhere on the website.

## Prerequisites

Java 8
Node 12
Chrome browser (Tested on Version 80.0.3987.132)

# To Run

```shell
npm install
npm test
```

# Report

I have added a html report of one of my runs to output/test-report.html

A preview can be viewed on the web [here](http://htmlpreview.github.io/?https://github.com/benzaremean/which_tech_exercise/blob/master/output/test-report.html)

## Regarding Functional Tests for the Page

I see three main Features that several functional tests can be written for

1. Product Comparison

   - I covered 4 scenarios in my automated [tests](src/tests/comparison.spec.js)

2. Product Filtering

3. Product Display including paginaton
