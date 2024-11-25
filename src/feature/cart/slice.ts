import { IBook } from "@/types/feature/books/books.interface";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
interface ICart extends IBook {
  quantity: number;
}
interface IInitialState {
  cart: ICart[];
}

const initialState: IInitialState = {
  cart: [],
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.cart.map((item) => item.id).includes(action.payload.id)) {
        const item = state.cart.find((item) => item.id === action.payload.id);
        if (item) {
          item.quantity++;
          return;
        }
      }
      state.cart = [...state.cart, action.payload];
    },
    increment(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity++;
    },
    decrement(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity--;
    },
    deleteItem(state, action) {
      console.log(action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});
export default CartSlice.reducer;
export const { addItem, increment, decrement, deleteItem } = CartSlice.actions;

export const getCurrentQuantityById = (id: number) => (state: RootState) => {
  return state.cart.cart.find((item) => item.id === id)?.quantity || 0;
};
export const getSumPrductCart = (state: RootState) => {
  return state.cart.cart
    .slice()
    .reduce((total, num) => total + num.quantity, 0);
};
export const getCart = (state: RootState) => {
  return state.cart.cart;
};
