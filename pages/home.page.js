const { expect } = require('@playwright/test');

class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="login"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button:text("Login")');
    this.registerLink = page.locator('a[href="/register"]');
    this.popularMakeLink = page.locator('a[href="/make"]');
    this.overallRatingLink = page.locator('a[href="/overall"]');
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/Buggy Cars Rating/i);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async openRegister() {
    await this.registerLink.click();
  }

  async openPopularMake() {
    await this.page.getByRole('link', { name: /Popular Make/i }).click();
  }

  async openOverallRating() {
    await this.overallRatingLink.click();
  }
}

module.exports = { HomePage };
