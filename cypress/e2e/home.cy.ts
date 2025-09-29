describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.window().should('have.property', 'document')
    cy.document().should('have.property', 'readyState', 'complete')
  })

  it('should load the home page successfully', () => {
    cy.get('body').should('be.visible')
    cy.contains('Welcome').should('be.visible')
  })

  it('should have a working navigation header', () => {
    cy.get('header').should('be.visible')
    cy.get('nav').should('be.visible')

    cy.get('nav a').should('have.length.greaterThan', 0)
  })

  it('should display main content sections', () => {

    cy.get('main').should('be.visible')

    cy.get('main').find('h1, h2, .hero, [data-testid="hero"]').should('exist')
  })

  it('should have a working footer', () => {
    cy.get('footer').should('be.visible')
    cy.get('footer a').should('have.length.greaterThan', 0)
  })

  it('should be responsive on mobile viewport', () => {
    cy.viewport('iphone-6')
    cy.get('body').should('be.visible')

    cy.get('nav').should('be.visible')
  })
})
