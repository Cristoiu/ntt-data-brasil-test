import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login',
    specPattern: [
      'cypress/e2e/frontend/tests/CT001.cy.ts',
      'cypress/e2e/frontend/tests/CT002.cy.ts',
      'cypress/e2e/frontend/tests/CT003.cy.ts',
      'cypress/e2e/backend/tests/CT001.cy.ts',
      'cypress/e2e/backend/tests/CT002.cy.ts',
      'cypress/e2e/backend/tests/CT003.cy.ts'
    ],
  },
  chromeWebSecurity: false,
  requestTimeout: 120000,
  responseTimeout: 120000,
  defaultCommandTimeout: 120000,
  pageLoadTimeout: 120000,
  execTimeout: 120000,
  taskTimeout: 120000,
});
