class LogoutPage {
  constructor(page) {
    this.page = page;

    // Profile dropdown
    this.profileDropdown = page.locator("a.tb-signet");

    // Logout link
    this.logoutButton = page.getByRole("link", { name: "Logout" });
  }

  async logout() {
    // Open the dropdown
    await this.profileDropdown.click();

    // Click Logout
    await this.logoutButton.click();

    // Wait for login page
    await this.page.waitForURL("**/site/userlogin");
  }
}

module.exports = LogoutPage;
