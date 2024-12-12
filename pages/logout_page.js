// LoginPage.js

const { expect } = require('@playwright/test');
const selectors = require('../pages/objects/logout_objects');
const helper = require('../utils/helper.js');

export class LogoutPage {
    constructor(page) {
    this.page = page;
    this.menuButton = selectors.menuButton;
    this.logoutLink = selectors.logoutLink;
    }
  

    async logout() {
        await helper.getElementByRole(this.page, selectors.button, selectors.logoutLink)
    }
  

  }
  

  