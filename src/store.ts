import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/feature/cart/slice";
import DropDownReducer from "@/components/DropDown/slice";
import ModalReducer from "@/components/modal/slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    dropDown: DropDownReducer,
    modal: ModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
