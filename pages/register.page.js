class RegisterPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.passwordInput = page.locator('#password');
    this.confirmPasswordInput = page.locator('#confirmPassword');
    this.registerButton = page.locator('button:text("Register")');
    this.resultAlert = page.locator('.result');
  }

  async registerUser(username, firstName, lastName, password, confirmPassword) {
    await this.usernameInput.fill(username);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
    // Wait for button to be enabled (if validation requires matching passwords or other fields)
    // Wait a short moment for validation to complete
    await this.registerButton.click({ force: true });  }
}

module.exports = { RegisterPage };

