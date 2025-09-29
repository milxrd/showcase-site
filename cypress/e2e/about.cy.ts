describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about')
    cy.window().should('have.property', 'document')
    cy.document().should('have.property', 'readyState', 'complete')
  })

  it('should load the about page successfully', () => {
    cy.get('body').should('be.visible')
    cy.contains('About').should('be.visible')
  })

  it('should display about content', () => {
    cy.get('main').should('be.visible')

    cy.get('main').find('h1, h2, h3, p').should('exist')
  })

  it('should have navigation back to home', () => {
    cy.get('nav a[href="/"]').should('be.visible')
  })

  it('should be responsive on mobile', () => {
    cy.viewport('iphone-6')
    cy.get('body').should('be.visible')
    cy.get('main').should('be.visible')
  })
})
