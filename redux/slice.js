import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((basketItem) => basketItem.id === action.payload.id);
      console.log(index);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
        console.log(newBasket);
      } else {
        console.warn(action.payload.id);
        console.log(newBasket);
      }
      state.items = newBasket;
    },
  },
});

export const { addBasket, removeFromBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
