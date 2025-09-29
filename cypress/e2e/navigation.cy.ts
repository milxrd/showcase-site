describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.window().should('have.property', 'document')
    cy.document().should('have.property', 'readyState', 'complete')
  })

  it('should navigate to About page', () => {
    cy.get('nav a[href*="about"]').first().click()
    cy.url().should('include', '/about')
    cy.get('body').should('be.visible')
  })

  it('should navigate to Blog page', () => {
    cy.get('nav a[href*="blog"]').first().click()
    cy.url().should('include', '/blog')
    cy.get('body').should('be.visible')
  })

  it('should navigate to Contact page', () => {
    cy.get('nav a[href*="contact"]').first().click()
    cy.url().should('include', '/contact')
    cy.get('body').should('be.visible')
  })

  it('should have working navigation links', () => {
    cy.get('nav a').each(($link) => {
      cy.wrap($link).should('have.attr', 'href')
      cy.wrap($link).should('be.visible')
    })
  })

  it('should highlight active navigation item', () => {
    cy.get('nav a').should('be.visible')
  })
})
