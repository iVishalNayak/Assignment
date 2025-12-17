class ModelPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.modelTitle = page.locator('h3');
    this.specsTable = page.locator('table:has-text("Specification")');
    this.commentsTable = page.locator('table:has-text("Comments")');
    this.voteButton = page.locator('button:text("Vote!")');
  }

  async vote() {
    await this.voteButton.click();
  }
}

module.exports = { ModelPage };
