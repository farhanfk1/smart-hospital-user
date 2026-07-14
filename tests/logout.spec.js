const { test, expect } = require("../fixtures/loginFixture");
const LogoutPage = require("../page/logoutPage");

test("Patient Logout", async ({ loggedInPage }) => {
  const logoutPage = new LogoutPage(loggedInPage);

  // Logout
  await logoutPage.logout();

  // Verify
  await expect(loggedInPage).toHaveURL(/site\/userlogin/);
});
