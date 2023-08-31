# PathFactory Assessment 

e2e tests for login page on https://magento.softwaretestingboard.com. Tests are written using Cypress and JavaScript and using a page object model. Test report are generated using mochaawesome reports and all the test report and artifacts are stored in a github action artifacts.

## Mochaawesome Reports

There is a job defined in the e2e-pf.yml workflow, which will take care of uploading the test report to github for reach run and it will available to download under the Artifacts. 

When the tests are run locally using `npm run cy:run` then the test report will be under cypress/reports. There will be an html file

## Available Scripts

In the project directory, you can run:

### `npm install`

installs the dev dependencies

### `npm run cy:run`

script for running the tests in chrome browser headless mode

## Run the tests locally in interactive mode

To run it locally in interactive mode, you can run the following command from root directory of this project

First install all the dependencies 
### `npm install` 
Then run the tests using 
### `npx cypress open`

Test Cases covered by e2e :- 

1. Validate successful account creation
2. Validate unsuccessful account creation - Already existing user
3. Validate login with valid credentials
4. Validate login with invalid credentials
5. Validate login with empty field errors - leaving email field
6. Validate login with empty field errors - leaving password field
7. Validate login with incompatible email field value
8. Validate forgot password link works
9. Validate unsuccessful Reset Password attempt - Incorrect email format
10. Validate successful Reset Password attempt

