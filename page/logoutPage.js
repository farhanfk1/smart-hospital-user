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
   await expect(this.profileDropdown).toBeVisible();
    await this.profileDropdown.click();

    // Click Logout
    await expect(this.logoutButton).toBeVisible();
    await this.logoutButton.click();

    // Wait for login page
    await expect(this.page).toHaveURL(/site\/userlogin/);
  }
}

module.exports = LogoutPage;
