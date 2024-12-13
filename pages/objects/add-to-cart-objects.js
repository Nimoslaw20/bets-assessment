const createSelector = (suffix) => `[data-test="${suffix}"]`;


module.exports = {
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
  inventoryItem: createSelector('inventory-item-name'),
  backToProducts:createSelector('back-to-products'),
  continueButton: createSelector('continue'),
  productImage: createSelector('item-4-img-link'),
  buttonElement: `button.btn.btn_primary.btn_small.btn_inventory${createSelector('add-to-cart-')}`,

};
