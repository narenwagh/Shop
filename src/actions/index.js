const itemsLoaded = (newItems) => {
  return {
    type: 'ITEMS_LOADED',
    payload: newItems,
  };
};

const addItem = (itemData) => {
  return {
    type: 'ADD_ITEM',
    payload: itemData,
  };
};

const singleProductLoaded = (newProduct) => {
  return {
    type: 'SINGLE_PRODUCT_LOADED',
    payload: newProduct,
  };
};

export { itemsLoaded, addItem, singleProductLoaded };
