const { test, expect } = require("@playwright/test");
const LoginPage = require("../page/LoginPage");
const LogoutPage = require("../page/LogoutPage");

test("Patient Logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);

  // Login
  await loginPage.open();
  await loginPage.login();

  // Logout
  await logoutPage.logout();

  // Verify
  await expect(page).toHaveURL(/site\/userlogin/);
});
