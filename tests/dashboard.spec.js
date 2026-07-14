const { test, expect } = require("../fixtures/dashboardFixture");
const dashboardData = require("../test-data/dashboardData");

test("Verify Dashboard and Book Appointment", async ({ dashboard }) => {
  await dashboard.verifyDashboard();
  await dashboard.clickBookAppointment();
});

test("Verify Dashboard KPI Cards", async ({ dashboard }) => {
  for (const item of dashboardData) {
    await dashboard.openCard(item.name, item.url);
    await dashboard.page.goBack(); // or dashboard.page.goBack()
  }
});

test("Verify Medical History Graph", async ({ dashboard }) => {
  await dashboard.verifyMedicalHistory();
});

test("Verify Upcoming Appointments - View All", async ({ dashboard }) => {
  await dashboard.verifyUpcomingAppointments();
  await dashboard.clickViewAll();
});

test("Verify Upcoming Appointments - Book Appointment", async ({
  dashboard,
}) => {
  await dashboard.verifyUpcomingAppointments();
  await dashboard.clickBookAppointmentFromWidget();
});

test("Verify Dashboard Charts", async ({ dashboard }) => {
  await dashboard.verifyTop10Findings();
  await dashboard.verifyTop10Symptoms();
});

test("Verify Top 10 Findings", async ({ dashboard }) => {
  await dashboard.verifyTop10Findings();
});

test("Verify Top 10 Symptoms", async ({ dashboard }) => {
  await dashboard.verifyTop10Symptoms();
});
