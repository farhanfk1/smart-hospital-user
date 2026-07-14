const { test, expect } = require("../fixtures/loginFixture");

const SidebarPage = require("../page/sidebarPage");
const sidebarData = require("../test-data/sidebarData");

test("Verify Patient Sidebar Navigation", async ({ loggedInPage }) => {
  const sidebar = new SidebarPage(loggedInPage);



  for (const item of sidebarData.Patient) {
    console.log(`Opening: ${item.menu}`);
    await sidebar.navigateTo(item.menu);
  }
});
