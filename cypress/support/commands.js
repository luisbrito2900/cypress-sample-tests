import HomePage from '../pom/homePage'

const homePage = new HomePage()

Cypress.Commands.add('login', (username, password) => {
  cy.visit('')
  homePage.checkVisitWasSuccessful()
  homePage.typeUsername(username)
  homePage.typePassword(password)
  homePage.clickOnLoginBtn()
})
