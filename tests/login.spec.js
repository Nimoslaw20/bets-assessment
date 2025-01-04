const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login-page.js");
const { LogoutPage } = require("../pages/logout-page.js");
const userData = require("../fixtures/user.json");
const helper = require("../utils/helper.js");

test.describe("Login Tests", () => {
  let loginPage;
  let logoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);
    await loginPage.goto();
  });

  test("should be able to access some login page elements", async () => {
    await loginPage.checkPageTitle(userData.swag_labs);
    await loginPage.checkLoginPageExist();
  });

  test("should be able to login with valid credentials", async () => {
    await loginPage.login(userData.standard_user, userData.password);
    await loginPage.confirmUserDashboard(
      userData.products,
      userData.dashboardUrl
    );
  });

  test("should fail when locked_out_user credentials are used", async () => {
    await loginPage.login(userData.locked_out_user, userData.password);
    await loginPage.getErrorMessage(userData.locked_out_user_error_message);
  });

  test("should be able to logout", async () => {
    await logoutPage.logout();
  });
});
