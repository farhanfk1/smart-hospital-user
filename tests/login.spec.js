const { test, expect } = require("@playwright/test");
const LoginPage = require("../page/loginPage");

test('User login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  
  await loginPage.login();
  await expect(page).toHaveURL(/patient\/dashboard/);

})