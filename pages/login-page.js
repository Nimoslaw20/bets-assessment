// LoginPage.js

const { expect } = require("@playwright/test");
const selectors = require("./objects/login-objects.js");
const helper = require("../utils/helper.js");

export class LoginPage {
	constructor(page) {
		this.page = page;
		this.usernameField = selectors.usernameField;
		this.passwordField = selectors.passwordField;
		this.loginButton = selectors.loginButton;
		this.loginContainer = selectors.loginContainer;
		this.form = selectors.form;
		this.userNamePlaceholder = selectors.userNamePlaceHolder;
		this.passwordPlaceholder = selectors.passwordPlaceHolder;
	}

	async goto() {
		await this.page.goto("/");
	}

	async checkPageTitle(pageTitle) {
		const title = await this.page.title();
		expect(title).toBe(pageTitle);
	}

	async checkLoginPageExist() {
		const loginContainer = await helper.getLocator(
			this.page,
			this.loginContainer,
		);
		await expect(loginContainer).toBeVisible();
		const loginForm = await helper.getLocator(this.page, this.form);
		await expect(loginForm).toBeVisible();
		const userNamePlaceholder = await helper.getLocator(
			this.page,
			this.userNamePlaceholder,
		);
		await expect(userNamePlaceholder).toBeVisible();
		const passwordPlaceholder = await helper.getLocator(
			this.page,
			this.passwordPlaceholder,
		);
		await expect(passwordPlaceholder).toBeVisible();
		const loginButton = await helper.getLocator(this.page, this.loginButton);
		const backgroundColor = await loginButton.evaluate((button) => {
			return window.getComputedStyle(button).backgroundColor;
		});
		expect(backgroundColor).toBe("rgb(61, 220, 145)");
	}

	async login(username, password) {
		await this.page.locator(this.usernameField).fill(username);
		await this.page.locator(this.passwordField).fill(password);
		await this.page.locator(this.loginButton).click();
	}

	async confirmUserDashboard(text) {
		await helper.getElementByExactText(this.page, text);
	}

	async getErrorMessage(message) {
		const expectedText = await helper.getElementByExactText(this.page, message);
		await expect(expectedText).toBeVisible();
	}
}
