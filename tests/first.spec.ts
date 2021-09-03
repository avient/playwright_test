import { test, expect } from '@playwright/test'

test.describe('two tests one', () => {
  test('1 > 1 @smoke', async({ page }) => {
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)
    // Compare screenshot with a stored reference.
    //expect(await page.screenshot()).toMatchSnapshot('get-started.png');
  })

  test('1 > 2', async({ page, browserName }) => {
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)
  })
})
