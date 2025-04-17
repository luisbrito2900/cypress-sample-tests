describe('Swag Labs - E2E Tests', function () {
  beforeEach(function () {
    cy.fixture('testData.json').then((data) => {
      this.data = data
      cy.login(data.username, data.password)
    })
  })

  it('Add Product To Cart', function () {
    cy.log('passes')
  })

  it('Add Product To Cart TEST', function () {
    cy.log(this.data.username)
  })
})