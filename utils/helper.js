
const {  expect } = require('@playwright/test');

export async function getElementByExactText(page, text) {
  return await page.getByText(text, { exact: true });
}


export async function getElementByRole(page, element, text) {
    return await page.getByRole(element, { name: text });
  }

  export async function getLocator(page, element) {
    return page.locator(element);
  }

  export async function getLocatorAndClick(page, element) {
    return page.locator(element).click();
  }



  export const expectStatus200 = (response) => {
     console.log("response status is ", response.status());
    expect(response.status()).toBe(200);
  };


  export const expectStatus404 = (response) => {
     console.log("response status is ", response.status());
    expect(response.status()).toBe(404);
  };

  export const expectStatus500 = (response) => {
     console.log("response status is ", response.status());
    expect(response.status()).toBe(500);
  };


  export const expectResponseBodyArray = (responseBody) => {
    expect(Array.isArray(responseBody)).toBeTruthy();
  };



  

