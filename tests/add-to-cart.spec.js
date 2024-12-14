const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page.js');
const { AddToCartPage } = require('../pages/add-to-cart.js');

const userData = require('../fixtures/user.json');
const { firstName, lastName, postCode } = require('../pages/objects/add-to-cart-objects.js');

test.describe('Add to Cart & Checkout Flow', () => {
  let loginPage;
  let addToCartPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    addToCartPage = new AddToCartPage(page);
    await loginPage.goto();

  });
  test('products page should have products', async ({page}) => {
    await loginPage.login(userData.name, userData.password);
    await loginPage.confirmUserDashboard(userData.products);
    await addToCartPage.checkProductProperties();
  });

  test('should be able to checkout multiple products', async ({page}) => {
    page.setDefaultTimeout(80000);
    await loginPage.login(userData.name, userData.password);
    await loginPage.confirmUserDashboard(userData.products);
    await addToCartPage.addAllItemsToCart();
    await addToCartPage.checkBadgeCount();
    await page.waitForTimeout(1000);
    await addToCartPage.goToCartPage();
    await addToCartPage.checkout();
    await addToCartPage.fillUserDetail(userData.first_Name,  userData.last_Name, userData.zip_code);
    await addToCartPage.proceedToContinue();
    await addToCartPage.proceedToFinish();
    await addToCartPage.getCheckoutConfirmationMessage();
    await addToCartPage.goBackHome();
    await loginPage.confirmUserDashboard(userData.products);
  });


  test('should be able to add a product to cart', async ({page}) => {
    await loginPage.login(userData.name, userData.password);
    await loginPage.confirmUserDashboard(userData.products);
    await addToCartPage.clickToAddProduct(userData.item_1);
    await addToCartPage.checkProductBadgeByCount();
  });


  test('should be able to view  product details', async ({page}) => {
    await loginPage.login(userData.name, userData.password);
    await loginPage.confirmUserDashboard(userData.products);
    await addToCartPage.getToItemDetails();
    await addToCartPage.getSelectedProductName(userData.item_1);
  });

 
 

 

  
  

  
});