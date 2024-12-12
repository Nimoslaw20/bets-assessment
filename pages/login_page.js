// LoginPage.js

const { expect } = require('@playwright/test');
const selectors = require('../pages/objects/login_objects');
const helper = require('../utils/helper.js');

export class LoginPage {
    constructor(page) {
    this.page = page;
    this.usernameField = selectors.usernameField;
    this.passwordField = selectors.passwordField;
    this.loginButton = selectors.loginButton;
    this.errorMessage = selectors.errorMessageText; 
    }
  
    async goto() {
      await this.page.goto('/');
    }
  
    async login(username, password) {
      await this.page.locator(this.usernameField).fill(username);
      await this.page.locator(this.passwordField).fill(password);
      await this.page.locator(this.loginButton).click();
    }

    async confirmUserDashboard(text){
      await helper.getElementByExactText(this.page,text);
    }
  
    async getErrorMessage() {
    const expectedText = await helper.getElementByExactText(this.page, this.errorMessage);
    await expect(expectedText).toBeVisible();
  }
  }
  

  