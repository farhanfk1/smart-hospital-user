const { expect } = require("@playwright/test");

class SidebarPage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(menuName) {
    const menu = this.page.getByRole("link", { name: menuName });

    await expect(menu).toBeVisible();
    await menu.click();
  }
}

module.exports = SidebarPage;
