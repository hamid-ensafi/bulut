import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";

interface IModalState {
  isOpen: boolean;
  openId?: string | number | null;
}
const initialState: IModalState = {
  isOpen: false,
  openId: "",
};
const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action) {
      state.isOpen = true;
      state.openId = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.openId = "";
    },
  },
});

export default ModalSlice.reducer;
export const { showModal, closeModal } = ModalSlice.actions;

export const getOpen = (state: RootState) => state.modal;
