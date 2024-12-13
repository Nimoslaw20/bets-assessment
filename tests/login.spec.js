const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page.js');
const { LogoutPage } = require('../pages/logout-page.js');
const userData = require('../fixtures/user.json');

test.describe('Login Tests', () => {
  let loginPage;
  let logoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);
    await loginPage.goto();
  });

  test('should be able to login with valid credentials', async () => {
    await loginPage.login(userData.name, userData.password);
    await loginPage.confirmUserDashboard(userData.products);
   
  });

 
  test('should fail when invalid credentials are used', async () => {
    await loginPage.login(userData.wrong_username, userData.wrong_password);
    await loginPage.getErrorMessage();
  });


  test('should be able to logout', async () => {
    await logoutPage.logout();
  });

  
});