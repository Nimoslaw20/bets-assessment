


export async function getElementByExactText(page, text) {
  return await page.getByText(text, { exact: true });
}


export async function getElementByRole(page, element, text) {
    return await page.getByRole(element, { name: text });
  }








