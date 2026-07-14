const { test } = require("@playwright/test");
const LoginPage = require("../page/loginPage");
const SidebarPage = require("../page/sidebarPage");
const sidebarData = require("../test-data/sidebarData");

test("Verify Patient Sidebar Navigation", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const sidebar = new SidebarPage(page);

  await loginPage.open();
  await loginPage.login();

  for (const item of sidebarData.Patient) {
    console.log(`Opening: ${item.menu}`);
    await sidebar.navigateTo(item.menu);
  }
});
