
const { expect } = require('@playwright/test');
const selectors = require('./objects/add-to-cart-objects.js');
const helper = require('../utils/helper.js');

export class AddToCartPage {
    constructor(page) {
    this.page = page;
    this.itemElement = selectors.itemElement;
    this.productImageElement = selectors.productImage;
    this.addToCartButtonElement = selectors.buttonElement;
    this.addToCart = selectors.addToCartButton;
    this.countBagde = selectors.countBadge;
    this.lastNameElement = selectors.lastName;
    this.firstNameElement = selectors.firstName;
    this.checkoutElement = selectors.checkout;
    this.itemPriceElement = selectors.itemPrice;
    this.postCodeElement = selectors.postCode;
    this.finishButtonElement = selectors.finishButton;
    this.continueButtonElement = selectors.continueButton;
    this.backToProductElement = selectors.backToProducts;
    this.cartIconElement = selectors.cartIcon;
    this.cancelButton = selectors.cancelButton;
    this.backToProducts = selectors.backToProducts;
    this.inventoryItem = selectors.inventoryItem;
    }


    async getCheckoutPageTitle(title){
        const pageTitle =  await helper.getLocator(this.page, this.productImageElement);
        expect(pageTitle).toEqual(title);
       }

    async checkIfPageHasProducts(){
     const productsLocator = await helper.getLocator(this.page, this.itemElement);
     const products = await productsLocator.allTextContents();
     expect(products.length).toBeGreaterThan(0);
    }

    async clickToAddProduct(productName){
       console.log(productName);
       await (await helper.getLocator(this.page,`[data-test="add-to-cart-${productName.toLowerCase().replace(/\s+/g, '-')}"]` )).click();
      
    }

    async addAllItemsToCart(){
        const productsLocator = await helper.getLocator(this.page, this.itemElement);
        const products = await productsLocator.allTextContents();
        console.log("products: ", products);
        for (let i = 0; i < products.length; i++) {
            const product = products[i].toLowerCase().replace(/\s+/g, '-');
            console.log("product is ", product);
            await this.page.locator(`[data-test="add-to-cart-${product}"]`).click();
            await this.page.waitForTimeout(2000);
        }
        await this.page.waitForTimeout(2000);
        
    }

    

    async checkBadgeCount() {
        await this.page.waitForTimeout(2000);
        const badgeLocator = this.page.locator(this.countBagde); 
        const badgeText = await badgeLocator.textContent();
        console.log(`Badge Text: ${badgeText.trim()}`);   
        const badgeNumber = parseInt(badgeText.trim(), 10);
        console.log("badgeNumber is ", badgeNumber);
        expect(badgeNumber).toBeGreaterThan(0);
        expect(badgeNumber).toEqual(6);
    }


    async checkProductBadgeByCount() {
        await this.page.waitForTimeout(2000);
        const badgeLocator = this.page.locator(this.countBagde); 
        const badgeText = await badgeLocator.textContent();
        console.log(`Badge Text: ${badgeText.trim()}`);   
        const badgeNumber = parseInt(badgeText.trim(), 10);
        console.log("badgeNumber is ", badgeNumber);
        expect(badgeNumber).toBeGreaterThan(0);
        expect(badgeNumber).toEqual(1);
    }

   
   async goToCartPage(){

     await (await helper.getLocator(this.page, this.cartIconElement)).click();
   }
      

   async checkout(){
    await (await helper.getLocator(this.page, this.checkoutElement)).click(); 
 }


   async fillUserDetail(firstName, lastName, postCode){
    await this.page.waitForTimeout(2000);
    await (await helper.getLocator(this.page, this.firstNameElement)).fill(firstName);
    await (await helper.getLocator(this.page, this.lastNameElement)).fill(lastName);
    await (await helper.getLocator(this.page, this.postCodeElement)).fill(postCode);
   }

   async proceedToContinue(){
    await (await helper.getLocator(this.page, this.continueButtonElement)).click(); 
   }

   async confirmOnCheckoutReview(){
    await helper.getElementByExactText(this.page, "Checkout: Overview");

   }


   async proceedToFinish(){
    await (await helper.getLocator(this.page, this.finishButtonElement)).click(); 
   }

   async cancelCheckout(){
    await (await helper.getLocator(this.page, this.cancelButton)).click(); 
   }

  
    async getCheckoutConfirmationMessage(){
        await helper.getElementByExactText(this.page, "Thank you for your order!");

    }

    async goBackHome(){
        await (await helper.getLocator(this.page, this.backToProducts)).click(); 
    }

  
    async getToItemDetails(){
        await (await helper.getLocator(this.page, this.productImageElement)).click();
     
    }

    async getSelectedProductName(productName){
        const product = await (await helper.getLocator(this.page, this.inventoryItem)).textContent();
        if (product === null) {
            console.error("Product text is null");
            return;
          }
          if (!productName) {
            console.error("Product name is undefined or null");
            return;
          }

          console.log("productName is", productName);    
          expect(productName.trim()).toEqual(product.trim());
       
    
    }


   
    


   
  

  
  }
  

  