const base = require("./loginFixture").test;
const DashboardPage = require("../page/dashboardPage");

exports.test = base.extend({
  dashboard: async ({ loggedInPage }, use) => {
    const dashboard = new DashboardPage(loggedInPage);
    await use(dashboard);
  }
});
exports.expect = require("@playwright/test").expect;