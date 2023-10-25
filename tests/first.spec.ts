import { test, expect } from '@playwright/test'
import { allure } from 'allure-playwright'

test.describe('two tests one', () => {
  test('1 > 1 @smoke', async ({ page }) => {
    await allure.issue(
      'Target issue',
      'https://github.com/allure-framework/allure-js/issues/352'
    )
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)
    // Compare screenshot with a stored reference.
    //expect(await page.screenshot()).toMatchSnapshot('get-started.png');
  })

  test('1 > 2', async ({ page }) => {
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)
  })
})
