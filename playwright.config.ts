import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Chrome Stable',
      use: {
        browserName: 'chromium',
        // Test against Chrome Stable channel.
        channel: 'chrome',
      },
    },
    //{
    //  name: 'Desktop Safari',
    //  use: {
    //    browserName: 'webkit',
    //    viewport: { width: 1200, height: 750 },
    //  }
    //},
    //// Test against mobile viewports.
    //{
    //  name: 'Mobile Chrome',
    //  use: devices['Pixel 5'],
    //},
    //{
    //  name: 'Mobile Safari',
    //  use: devices['iPhone 12'],
    //},
    //{
    //  name: 'Desktop Firefox',
    //  use: {
    //    browserName: 'firefox',
    //    viewport: { width: 800, height: 600 },
    //  }
    //},
  ],
  use: {
    headless: true,
    //video: 'retain-on-failure',
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  retries: 1,
  timeout: 10000,
  workers: 2,
  outputDir: 'allure-results',
  reporter: [['list'], ['allure-playwright']],
}
export default config
