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
  }

  async verifyDashboard() {
    await expect(this.welcomeHeading).toBeVisible();
  }

  async clickBookAppointment() {
    await this.bookAppointmentButton.click();
    await expect(this.page).toHaveURL(/patient\/dashboard\/appointment/);
  }

  // for dashboard kpi
  async openCard(cardName, expectedUrl) {
   const card = this.page.locator(`a.sh-kpi-card[href*="${expectedUrl}"]`);

    await expect(card).toBeVisible();

    await card.click();

    await expect(this.page).toHaveURL(new RegExp(expectedUrl));

    console.log(`Opened: ${cardName}`);
  }
}

module.exports = DashboardPage;
