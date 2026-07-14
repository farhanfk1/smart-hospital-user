const { test, expect } = require("../fixtures/loginFixture");


const DashboardPage = require("../page/dashboardPage");

const dashboardData = require("../test-data/dashboardData");


test("Verify Dashboard and Book Appointment", async ({ loggedInPage }) => {
  const dashboard = new DashboardPage(loggedInPage);

  await dashboard.verifyDashboard();
  await dashboard.clickBookAppointment();
});

test("Verify Dashboard KPI Cards", async ({ loggedInPage }) => {
  const dashboard = new DashboardPage(loggedInPage);

  for (const item of dashboardData) {
    await dashboard.openCard(item.name, item.url);

    await loggedInPage.goBack();
  }
});

test("Verify Medical History Graph", async ({ loggedInPage }) => {
  const dashboard = new DashboardPage(loggedInPage);

  await dashboard.verifyMedicalHistory();
});

test("Verify Upcoming Appointments - View All", async ({ loggedInPage }) => {
  const dashboard = new DashboardPage(loggedInPage);

  await dashboard.verifyUpcomingAppointments();
  await dashboard.clickViewAll();
});

test("Verify Upcoming Appointments - Book Appointment", async ({
  loggedInPage,
}) => {
  const dashboard = new DashboardPage(loggedInPage);

  await dashboard.verifyUpcomingAppointments();
  await dashboard.clickBookAppointmentFromWidget();
});

test("Verify Dashboard Charts", async ({ loggedInPage }) => {
  const dashboard = new DashboardPage(loggedInPage);

  await dashboard.verifyTop10Findings();
  await dashboard.verifyTop10Symptoms();
});
test("Verify Top 10 Findings", async ({ loggedInPage }) => {
  const dashboard = new DashboardPage(loggedInPage);

  await dashboard.verifyTop10Findings();
});

test("Verify Top 10 Symptoms", async ({ loggedInPage }) => {
  const dashboard = new DashboardPage(loggedInPage);

  await dashboard.verifyTop10Symptoms();
});
