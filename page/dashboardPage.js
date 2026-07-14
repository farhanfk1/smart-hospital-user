const { expect } = require("@playwright/test");

class DashboardPage {
  constructor(page) {
    this.page = page;

    // Welcome heading
    this.welcomeHeading = page.getByRole("heading", {
      name: /Welcome back/,
    });

    // Book Appointment button
    this.bookAppointmentButton = page.locator("a.btn-pulse");

    // Medical History
   this.medicalHistoryHeading = page.getByText("Medical History", {
     exact: true,
   });

    this.medicalHistoryChart = page.locator("#medical-history-chart");

    // Upcoming Appointments
    this.upcomingAppointmentsHeading = page.getByRole("heading", {
      name: "Upcoming Appointments",
    });

    this.viewAllButton = page.getByRole("link", {
      name: "View All",
    });

    this.bookAppointmentButton = page.getByRole("link", {
      name: /Book Appointment/,
    }).last();
  }

  async verifyDashboard() {
    await expect(this.welcomeHeading).toBeVisible();
  }

  async clickBookAppointment() {
    await this.bookAppointmentButton.click();
    await expect(this.page).toHaveURL(/patient\/dashboard\/appointment/);
  }

  // for dashboard 
  async openCard(cardName, expectedUrl) {
   const card = this.page.locator(`a.sh-kpi-card[href*="${expectedUrl}"]`);

    await expect(card).toBeVisible();

    await card.click();

    await expect(this.page).toHaveURL(new RegExp(expectedUrl));

    console.log(`Opened: ${cardName}`);
  }

 // Verify Medical History Graph
  async verifyMedicalHistory() {
    await expect(this.medicalHistoryHeading).toBeVisible();
    await expect(this.medicalHistoryChart).toBeVisible();
  }

  // Verify Upcoming Appointments Section
  async verifyUpcomingAppointments() {
    await expect(this.upcomingAppointmentsHeading).toBeVisible();
  }

  // Click View All
  async clickViewAll() {
    await this.viewAllButton.click();
    await expect(this.page).toHaveURL(/patient\/dashboard\/appointment/);
  }

  // Click Book Appointment
  async clickBookAppointmentFromWidget() {
    await this.bookAppointmentButton.click();
    await expect(this.page).toHaveURL(/patient\/dashboard\/appointment/);
  }
}




module.exports = DashboardPage;
