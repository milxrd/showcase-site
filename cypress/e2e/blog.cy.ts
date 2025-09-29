describe('Blog Page', () => {
  beforeEach(() => {
    cy.visit('/blog')
    cy.window().should('have.property', 'document')
    cy.document().should('have.property', 'readyState', 'complete')
  })

  it('should load the blog page successfully', () => {
    cy.get('body').should('be.visible')
    cy.contains('Blog').should('be.visible')
  })

  it('should display blog content', () => {
    cy.get('main').should('be.visible')

    cy.get('main').find('h1, h2, h3, article, .post, [data-testid="post"]').should('exist')
  })

  it('should have navigation back to home', () => {
    cy.get('nav a[href="/"]').should('be.visible')
  })

  it('should display blog posts if available', () => {
    cy.get('article, .post-card, [data-testid="post-card"]').then(($posts) => {
      if ($posts.length > 0) {
        cy.wrap($posts).first().within(() => {
          cy.get('h1, h2, h3, a').should('exist')
        })
      } else {
        cy.get('body').then(($body) => {
          const bodyText = $body.text().toLowerCase()
          const hasEmptyState = bodyText.includes('coming soon') ||
                                bodyText.includes('no posts') ||
                                bodyText.includes('posts coming')
          cy.wrap(hasEmptyState).should('be.true')
        })
      }
    })
  })

  it('should be responsive on mobile', () => {
    cy.viewport('iphone-6')
    cy.get('body').should('be.visible')
    cy.get('main').should('be.visible')
  })
})
