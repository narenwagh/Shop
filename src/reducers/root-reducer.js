const initialState = {
  items: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEMS_LOADED':
      return {
        items: action.payload,
        loading: false,
      };
    case 'SINGLE_PRODUCT_LOADED':
      return {
        loading: false,
        singleProduct: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
