const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { ModelPage } = require('../pages/model.page');

test.describe('Browsing & model details', () => {
  test('navigate home -> make -> model and verify sections', async ({ page }) => {
    const home = new HomePage(page);

    await home.goto();
    await home.openPopularMake();

    await page.getByRole('link', { name: /Lamborghini/i }).first().click();
    await page.getByRole('link', { name: /Diablo/i }).first().click();

    const model = new ModelPage(page);

    await expect(model.modelTitle).toContainText(/Diablo/i);
    await expect(model.specsTable).toBeVisible();
    await expect(model.commentsTable).toBeVisible();
  });

  test('overall rating page shows models table', async ({ page }) => {
    const home = new HomePage(page);

    await home.goto();
    await home.openOverallRating();

    const table = page.locator('table');
    await expect(table).toBeVisible();
    const rows = table.locator('tr');
    expect(await rows.count()).toBeGreaterThan(1);
  });
});
