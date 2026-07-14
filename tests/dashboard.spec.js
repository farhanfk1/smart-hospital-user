const { test } = require("@playwright/test");

const LoginPage = require("../page/loginPage");
const DashboardPage = require("../page/dashboardPage");

const dashboardData = require("../test-data/dashboardData");

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);

  await login.open();
  await login.login();
});

test("Verify Dashboard and Book Appointment", async ({ page }) => {
  const dashboard = new DashboardPage(page);

  await dashboard.verifyDashboard();
  await dashboard.clickBookAppointment();
});

test("Verify Dashboard KPI Cards", async ({ page }) => {
  const dashboard = new DashboardPage(page);

  for (const item of dashboardData) {
    await dashboard.openCard(item.name, item.url);

    await page.goBack();
  }
});
