describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact')
    cy.window().should('have.property', 'document')
    cy.document().should('have.property', 'readyState', 'complete')
  })

  it('should load the contact page successfully', () => {
    cy.get('body').should('be.visible')
    cy.contains('Contact').should('be.visible')
  })

  it('should display contact form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="text"], input[type="email"]').should('exist')
    cy.get('textarea').should('exist')
    cy.get('button[type="submit"]').should('exist')
  })

  it('should have form validation', () => {

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/contact')
  })

  it('should have contact information', () => {
    
    cy.get('a[href^="mailto:"], a[href*="github"], a[href*="linkedin"], a[href*="twitter"]').should('exist')
  })

  it('should be responsive on mobile', () => {
    cy.viewport('iphone-6')
    cy.get('body').should('be.visible')
    cy.get('form').should('be.visible')
  })
})
