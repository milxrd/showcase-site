import Header from '../../app/ui/Header'

describe('Header Component', () => {
  const mockNavItems = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  it('should render the header with navigation', () => {
    cy.mount(<Header title="Test Site" navItems={mockNavItems} />)
    cy.get('header').should('be.visible')
    cy.get('nav').should('be.visible')
  })

  it('should contain navigation links', () => {
    cy.mount(<Header title="Test Site" navItems={mockNavItems} />)
    cy.get('nav a').should('have.length', 3)

    cy.get('nav a').each(($link) => {
      cy.wrap($link).should('have.attr', 'href')
    })
  })

  it('should display title', () => {
    cy.mount(<Header title="Test Site" navItems={mockNavItems} />)
    cy.get('header').find('a').find('span').should('contain', 'Test Site')
  })

  it('should highlight active navigation item', () => {
    cy.mount(<Header title="Test Site" navItems={mockNavItems} />)
    cy.get('nav a').should('be.visible')
  })

  it('should be responsive', () => {
    cy.mount(<Header title="Test Site" navItems={mockNavItems} />)
    cy.viewport('iphone-6')
    cy.get('header').should('be.visible')
    cy.get('nav').should('be.visible')
  })
})
