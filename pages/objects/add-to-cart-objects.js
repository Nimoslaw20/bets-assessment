
const createSelector = (suffix) => `[data-test="${suffix}"]`;

module.exports = {

  //using data-test element
  itemElement: `div.inventory_item_name${createSelector('inventory-item-name')}`,
  addToCartButton: createSelector('add-to-cart'),
  countBadge: createSelector('shopping-cart-badge'),
  cartIcon:createSelector('shopping-cart-link'),
  lastName: createSelector('lastName'),
  firstName: createSelector('firstName'),
  checkout: createSelector('checkout'),
  postCode: createSelector('postalCode'),
  finishButton: createSelector('finish'),
  cancelButton: createSelector('cancel'),
  inventoryItemName: createSelector('inventory-item-name'),
  inventoryContainer: createSelector('inventory-container'),
  backToProducts:createSelector('back-to-products'),
  continueButton: createSelector('continue'),
  productImage: createSelector('item-4-img-link'),
  buttonElement: `button.btn.btn_primary.btn_small.btn_inventory${createSelector('add-to-cart-')}`,


  //using class 
  inventorItemNameWithDataTest:'.inventory_item_name',
  inventoryItem:'.inventory_item',
  productDescription: '.inventory_item_desc',
  productName: '.inventory_item_name',
  productPrice:'.inventory_item_price',
  

};
