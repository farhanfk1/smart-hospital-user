const { expect } = require("@playwright/test");
class LogoutPage {
  constructor(page) {
    this.page = page;

    // Profile dropdown
    this.profileDropdown = page.locator("a.tb-signet");

    // Logout link
    this.logoutButton = page.locator('a[href*="/site/logout"]');
  }

  async logout() {
    // Open the dropdown
   
    await this.profileDropdown.click();

    // Wait until dropdown is open
    await expect(this.logoutButton).toBeVisible();

    // Click Logout
    await this.logoutButton.click();

    // Wait for login page
    await this.page.waitForURL("**/site/userlogin");
  }
}

module.exports = LogoutPage;
