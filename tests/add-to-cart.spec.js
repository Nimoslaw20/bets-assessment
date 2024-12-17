const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login-page.js");
const { AddToCartPage } = require("../pages/add-to-cart.js");
const userData = require("../fixtures/user.json");

test.describe("Add to Cart & Checkout Flow", () => {
	let loginPage;
	let addToCartPage;
	test.beforeEach(async ({ page }) => {
		loginPage = new LoginPage(page);
		addToCartPage = new AddToCartPage(page);
		await loginPage.goto();
		await loginPage.login(userData.standard_user, userData.password);
		await addToCartPage.confirmProductsPage(
			userData.products,
			userData.dashboardUrl,
		);
	});
	test("products page should have products", async ({ page }) => {
		await addToCartPage.checkProductProperties();
	});

	test("should be able to checkout multiple products", async ({ page }) => {
		await addToCartPage.confirmProductsPage(
			userData.products,
			userData.dashboardUrl,
		);
		await addToCartPage.getPageTitle(userData.products);
		page.setDefaultTimeout(80000);
		await addToCartPage.addAllItemsToCart();
		await addToCartPage.checkBadgeCount();
		await page.waitForTimeout(1000);
		await addToCartPage.goToCartPage(userData.cartPageUrl);
		await addToCartPage.getPageTitle(userData.your_cart);
		await addToCartPage.checkout();
		await addToCartPage.getPageTitle(userData.check_information);
		await addToCartPage.fillUserDetail(
			userData.first_Name,
			userData.last_Name,
			userData.zip_code,
		);
		await addToCartPage.proceedToContinue();
		await addToCartPage.getPageTitle(userData.checkout_overview);
		await addToCartPage.proceedToFinish();
		await addToCartPage.getPageTitle(userData.checkout_complete);
		await addToCartPage.getCheckoutConfirmationMessage();
		await addToCartPage.goBackHome();
		await loginPage.confirmUserDashboard(userData.products);
	});

	test("should be able to add a product to cart", async ({ page }) => {
		await addToCartPage.confirmProductsPage(
			userData.products,
			userData.dashboardUrl,
		);
		await addToCartPage.clickToAddProduct(userData.item_1);
		await addToCartPage.checkProductBadgeByCount();
	});

	test("should be able to view  product details page", async ({ page }) => {
		await addToCartPage.confirmProductsPage(
			userData.products,
			userData.dashboardUrl,
		);
		await addToCartPage.getToItemDetails();
		await addToCartPage.getSelectedProductName(userData.item_1);
	});
});
