export default class HomePage {
  checkVisitWasSuccessful() {
    return cy.get('[data-test="username"]').should('be.visible')
  }
  typeUsername(username) {
    return cy.get('[data-test="username"]').type(username)
  }
  typePassword(password) {
    return cy.get('[data-test="password"]').type(password)
  }
  clickOnLoginBtn() {
    return cy.get('[data-test="login-button"]').click()
  }
}
