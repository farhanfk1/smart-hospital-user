const base = require("@playwright/test");
const LoginPage = require("../page/loginPage");

exports.test = base.test.extend({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login();

    // give the logged in page to the test
    await use(page);
  },
});

exports.expect = base.expect;