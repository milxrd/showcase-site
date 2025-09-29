import ContentCard from '../../app/ui/ContentCard'

describe('ContentCard Component', () => {
  const mockCardItems = [
    { _title: 'Card Title 1', content: 'Card content 1' },
    { _title: 'Card Title 2', content: 'Card content 2' },
    { _title: 'Card Title 3', content: 'Card content 3' }
  ]

  const mockImageSrc = '/profilepicture.webp'

  it('should render the content card with profile section', () => {
    cy.mount(<ContentCard cardItems={mockCardItems} imageSrc={mockImageSrc} />)
    cy.get('.relative').should('be.visible')
  })

  it('should display profile image and username', () => {
    cy.mount(<ContentCard cardItems={mockCardItems} imageSrc={mockImageSrc} />)
    cy.get('h3').contains('User Name').should('be.visible')
    cy.get('img').should('be.visible')
    cy.get('img').should('have.attr', 'src', mockImageSrc)
    cy.get('img').should('have.attr', 'alt', 'Profile')
  })

  it('should render all card items', () => {
    cy.mount(<ContentCard cardItems={mockCardItems} imageSrc={mockImageSrc} />)
    cy.get('.bg-olive').should('have.length', 3)
  })

  it('should display card titles and content correctly', () => {
    cy.mount(<ContentCard cardItems={mockCardItems} imageSrc={mockImageSrc} />)
    cy.get('h3').contains('Card Title 1').should('be.visible')
    cy.get('p').contains('Card content 1').should('be.visible')
    cy.get('h3').contains('Card Title 2').should('be.visible')
    cy.get('p').contains('Card content 2').should('be.visible')
    cy.get('h3').contains('Card Title 3').should('be.visible')
    cy.get('p').contains('Card content 3').should('be.visible')
  })

  it('should have proper card styling', () => {
    cy.mount(<ContentCard cardItems={mockCardItems} imageSrc={mockImageSrc} />)
    cy.get('.bg-olive').first().should('have.class', 'bg-opacity-20')
    cy.get('.bg-olive').first().should('have.class', 'px-6')
    cy.get('.bg-olive').first().should('have.class', 'pb-8')
    cy.get('.bg-olive').first().should('have.class', 'pt-10')
    cy.get('.bg-olive').first().should('have.class', 'shadow-xl')
  })

  it('should have animation classes and delays', () => {
    cy.mount(<ContentCard cardItems={mockCardItems} imageSrc={mockImageSrc} />)
    cy.get('.bg-olive').should('have.class', 'opacity-0')
    cy.get('.bg-olive').should('have.class', 'animate-slide-down')

    cy.get('.transition-discrete').should('be.visible')
    cy.get('.bottom-44').should('be.visible')
  })

  it('should handle different numbers of card items', () => {
    const singleCardItem = [{ _title: 'Single Card', content: 'Single content' }]
    cy.mount(<ContentCard cardItems={singleCardItem} imageSrc={mockImageSrc} />)
    cy.get('.bg-olive').should('have.length', 1)
    cy.get('h3').contains('Single Card').should('be.visible')
  })

  it('should handle empty card items array', () => {
    cy.mount(<ContentCard cardItems={[]} imageSrc={mockImageSrc} />)
    cy.get('h3').contains('User Name').should('be.visible')
    cy.get('img').should('be.visible')
    cy.get('.bg-olive').should('not.exist')
  })

  it('should have proper image styling', () => {
    cy.mount(<ContentCard cardItems={mockCardItems} imageSrc={mockImageSrc} />)
    cy.get('img').should('have.class', 'object-cover')
    cy.get('img').should('have.class', 'rounded-full')
    cy.get('img').should('have.class', 'w-24')
    cy.get('img').should('have.class', 'h-24')
  })

  it('should have profile image container styling', () => {
    cy.mount(<ContentCard cardItems={mockCardItems} imageSrc={mockImageSrc} />)
    cy.get('.w-24').first().should('have.class', 'h-24')
    cy.get('.w-24').first().should('have.class', 'rounded-full')
    cy.get('.w-24').first().should('have.class', 'bg-olive-dark')
    cy.get('.w-24').first().should('have.class', 'bg-opacity-50')
    cy.get('.w-24').first().should('have.class', 'flex')
    cy.get('.w-24').first().should('have.class', 'items-center')
  })

  it('should be responsive', () => {
    cy.mount(<ContentCard cardItems={mockCardItems} imageSrc={mockImageSrc} />)
    cy.viewport('iphone-6')
    cy.get('.relative').should('be.visible')
    cy.get('.sm\\:mx-auto').should('be.visible')
    cy.get('.sm\\:rounded-lg').should('be.visible')
  })

  it('should have proper layout structure', () => {
    cy.mount(<ContentCard cardItems={mockCardItems} imageSrc={mockImageSrc} />)
    cy.get('.relative').first().should('have.class', 'flex')
    cy.get('.relative').first().should('have.class', 'flex-row')
    cy.get('.relative').first().should('have.class', 'gap-3')
    cy.get('.relative').first().should('have.class', 'leading-7')
    cy.get('.relative').first().should('have.class', 'text-black')
  })

  it('should handle different image sources', () => {
    const differentImageSrc = '/different-image.jpg'
    cy.mount(<ContentCard cardItems={mockCardItems} imageSrc={differentImageSrc} />)
    cy.get('img').should('have.attr', 'src', differentImageSrc)
  })
})
