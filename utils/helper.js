


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






