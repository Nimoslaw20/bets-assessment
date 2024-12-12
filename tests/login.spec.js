const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login_page.js');
const { LogoutPage } = require('../pages/logout_page.js');
const userData = require('../fixtures/user.json');

test.describe('Login Tests', () => {
  let loginPage;
  let logoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);
    await loginPage.goto();
  });

  test('Successful login with valid credentials', async () => {
    await loginPage.login(userData.name, userData.password);
    await loginPage.confirmUserDashboard(userData.products);
  });

 
  test('Login fails with invalid credentials', async () => {
    await loginPage.login(userData.wrong_username, userData.wrong_password);
    await loginPage.getErrorMessage();
  });

  
  test('Logout', async () => {
    await logoutPage.logout();
  });

  
});