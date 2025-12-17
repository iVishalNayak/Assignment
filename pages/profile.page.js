class ProfilePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.profileLink = page.locator('a[href="/profile"]');
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.saveButton = page.locator('button:text("Save")');
    this.resultAlert = page.locator('.result');
  }

  async open() {
    await this.page.getByRole('link', { name: /profile/i }).click();
  }

  async updateName(firstName, lastName) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
  }
}

module.exports = { ProfilePage };
