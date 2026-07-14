const { test } = require("@playwright/test");

const LoginPage = require("../page/LoginPage");
const DashboardPage = require("../page/DashboardPage");
const DashboardKpiPage = require("../page/dashboardPage");
const dashboardKpiData = require("../test-data/dashboardData");

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
  const dashboard = new DashboardKpiPage(page);

  for (const item of dashboardKpiData) {
    await dashboard.openCard(item.name, item.url);

    await page.goBack();
  }
});
