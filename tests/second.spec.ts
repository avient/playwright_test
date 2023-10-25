import { test, expect } from '@playwright/test'

test.use({ headless: true, viewport: { width: 600, height: 900 } })

test('two tests second', () => {
  test('2 > 1', async ({ page }) => {
    await test.step('step', async () => {
      console.log('as')
    })
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright1/)
  })

  test('2 > 2 @smoke', async ({ page }) => {
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)
  })
})
