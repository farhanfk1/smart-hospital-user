const { test, expect } = require("../fixtures/loginFixture");

test('User login', async ({ loggedInPage }) => {

  await expect(loggedInPage).toHaveURL(/patient\/dashboard/);

})