import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //   payload - newItem.
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload to be pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      if (item.quantity > 0) {
        item.totalPrice = item.unitPrice * item.quantity;
      } else cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
//selector Function
export const getTotalCartQuantity = (store) => store.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (store) => store.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCart = (store) => store.cart.cart;

export const getCurrentQuantityById = function (id) {
  return (store) => store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};

// reselct library can do the optimize these functions.

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
