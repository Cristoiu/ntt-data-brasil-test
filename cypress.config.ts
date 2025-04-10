import { defineConfig } from 'cypress';
import * as fs from 'fs';
export default defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login',
    specPattern: [
      'cypress/e2e/frontend/tests/CT001.cy.ts',
      'cypress/e2e/frontend/tests/CT002.cy.ts',
      'cypress/e2e/frontend/tests/CT003.cy.ts',
      'cypress/e2e/backend/tests/CT001.cy.ts',
      'cypress/e2e/backend/tests/CT002.cy.ts'
    ],
    video: true,
    videoCompression: 32,
    setupNodeEvents(on, config) {
      console.log(config);
      on(
        'after:spec',
        (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
          console.log(spec);
          if (results && results.video) {
            const failures = results.tests.some((test) =>
              test.attempts.some((attempt) => attempt.state === 'failed')
            )
            if (!failures && fs.existsSync(results.video)) {
              fs.unlinkSync(results.video)
            };
          };
        },
      );
    },
  },
  chromeWebSecurity: false,
  requestTimeout: 120000,
  responseTimeout: 120000,
  defaultCommandTimeout: 120000,
  pageLoadTimeout: 120000,
  execTimeout: 120000,
  taskTimeout: 120000,
});
