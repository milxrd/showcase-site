import './commands'

import { mount } from 'cypress/react'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount(component: React.ReactElement): Chainable<unknown>
    }
  }
}

export { mount }
