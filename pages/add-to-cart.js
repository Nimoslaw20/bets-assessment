
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
    this.inventoryItemName = selectors.inventoryItemName;
    this.inventoryContainer = selectors.inventoryContainer;
    this.productDescription = selectors.productDescription;
    this.productName = selectors.productName;
    this.productPrice = selectors.productPrice;
    this.inventorItemNameWithDataTest = selectors.inventorItemNameWithDataTest;
    }


    async getCheckoutPageTitle(title){
        const pageTitle =  await helper.getLocator(this.page, this.productImageElement);
        expect(pageTitle).toEqual(title);
       }

 
    async checkProductProperties() {
      
        const products = await (await helper.getLocator(this.page, this.inventoryContainer)).locator('.inventory_item');    
        
    
        if(products == null){
            console.error("Products not found.");
            return;
        }
        
        const count = await products.count();
        expect(count).toEqual(6);
      
        for (let i = 0; i < count; i++) {
          const product = products.nth(i);
          console.log(`(${i}) - The Product Details - ${product}`);
      
          
        await expect(product.locator(this.inventorItemNameWithDataTest)).toBeVisible(); 
        const productName =  await product.locator(this.inventorItemNameWithDataTest).allTextContents(); 
        console.log("The Product Name is ", productName);


          await expect(product.locator(this.productDescription)).toBeVisible(); 
          const checkProductDescription =  await product.locator(this.productDescription).allTextContents(); 
          console.log("The Product Description is ", checkProductDescription);
      
          
          const productImage = product.locator('img');
          await expect(productImage).toBeVisible();

          const imageLink = await productImage.getAttribute('src');
          console.log("TThe Product Image is:", imageLink);
          await expect(productImage).toHaveAttribute('src', /.+/); 
      
        
          await expect(product.locator(this.productPrice)).toBeVisible(); 
          const checkProductPrice =  await product.locator(this.productPrice).allTextContents(); 
          console.log("The Product Price is ", checkProductPrice);
        }
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
        const badgeNumber = Number.parseInt(badgeText.trim(), 10);
        console.log("badgeNumber is ", badgeNumber);
        expect(badgeNumber).toBeGreaterThan(0);
        expect(badgeNumber).toEqual(6);
    }

   async confirmProductsPage(text, expectedUrl){
      await helper.getElementByExactText(this.page,text);
      const currentUrl = await this.page.url();
      console.log("currentUrl is ", currentUrl);
      expect(currentUrl).toBe(expectedUrl);  
    }
  

    async checkProductBadgeByCount() {
        await this.page.waitForTimeout(2000);
        const badgeLocator = this.page.locator(this.countBagde); 
        const badgeText = await badgeLocator.textContent();
        console.log(`Badge Text: ${badgeText.trim()}`);   
        const badgeNumber = Number.parseInt(badgeText.trim(), 10);
        console.log("badgeNumber is ", badgeNumber);
        expect(badgeNumber).toBeGreaterThan(0);
        expect(badgeNumber).toEqual(1);
    }

   
   async goToCartPage(expectedUrl){
     await (await helper.getLocator(this.page, this.cartIconElement)).click();
     const currentUrl = await this.page.url();
     console.log("currentUrl is ", currentUrl);
     expect(currentUrl).toBe(expectedUrl);  
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
        const product = await (await helper.getLocator(this.page, this.inventoryItemName)).textContent();
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
  

  