const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');
const { ProfilePage } = require('../pages/profile.page');

test.describe('Profile management', () => {
  test('logged-in user can view and update profile', async ({ page }) => {
    const home = new HomePage(page);
    const profile = new ProfilePage(page);

    await home.goto();

    // TODO: replace with a real existing account
    await home.login('existingUser', 'validPwd');

    await profile.open();

    await expect(profile.firstNameInput).toBeVisible();

    const newFirst = 'Jane';
    const newLast = 'Smith';
    await profile.updateName(newFirst, newLast);

    await expect(profile.resultAlert).not.toBeEmpty();
  });
});
