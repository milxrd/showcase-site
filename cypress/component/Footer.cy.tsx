import Footer from '../../app/ui/Footer'

describe('Footer Component', () => {
  const mockAuthor = 'John Doe'

  it('should render the footer with author', () => {
    cy.mount(<Footer author={mockAuthor} />)
    cy.get('footer').should('be.visible')
  })

  it('should display copyright with correct author and year', () => {
    cy.mount(<Footer author={mockAuthor} />)
    cy.get('footer p').first().should('contain', `© ${mockAuthor} 2025`)
  })

  it('should contain social media section', () => {
    cy.mount(<Footer author={mockAuthor} />)
    cy.get('footer').should('contain', 'Follow us:')
  })

  it('should display Facebook icon', () => {
    cy.mount(<Footer author={mockAuthor} />)
    cy.get('footer svg').should('be.visible')
    cy.get('footer span').last().find('svg').should('have.class', 'fa-stack')
  })

  it('should have proper footer styling', () => {
    cy.mount(<Footer author={mockAuthor} />)
    cy.get('footer').should('have.class', 'mt-9')
    cy.get('footer').should('have.class', 'w-full')
    cy.get('footer').should('have.class', 'max-w-[1525px]')
  })

  it('should have separator line', () => {
    cy.mount(<Footer author={mockAuthor} />)
    cy.get('footer div').first().should('have.class', 'flex')
    cy.get('footer div').first().should('have.class', 'shrink-0')
    cy.get('footer div').first().should('have.class', 'h-px')
    cy.get('footer div').first().should('have.class', 'bg-black')
  })

  it('should be responsive on mobile', () => {
    cy.mount(<Footer author={mockAuthor} />)
    cy.viewport('iphone-6')
    cy.get('footer').should('be.visible')
    cy.get('footer').should('have.class', 'max-md:max-w-full')
  })

  it('should handle different author names', () => {
    const differentAuthor = 'Jane Smith'
    cy.mount(<Footer author={differentAuthor} />)
    cy.get('footer p').first().should('contain', `© ${differentAuthor} 2025`)
  })

  it('should have proper text styling', () => {
    cy.mount(<Footer author={mockAuthor} />)
    cy.get('footer p').should('have.class', 'text-black')
    cy.get('footer').should('have.class', 'text-opacity-80')
  })

  it('should have social media section on the right', () => {
    cy.mount(<Footer author={mockAuthor} />)
    cy.get('footer div').last().should('have.class', 'flex')
    cy.get('footer div').last().should('have.class', 'gap-6')
    cy.get('footer div').last().should('have.class', 'items-center')
    cy.get('footer div').last().should('have.class', 'text-right')
  })
})
