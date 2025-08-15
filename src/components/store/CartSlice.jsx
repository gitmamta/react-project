import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
 
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.new_price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.new_price, //new_price because in json data old price and new price is used
          quantity: 1,
          totalPrice: newItem.new_price,
          image: newItem.image,
        });
      }

      state.totalQuantity++;
      state.totalPrice += newItem.new_price;
    },

    removeCart(state, action) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.totalPrice;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },

    increase(state, action) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },

    decrease(state, action) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalPrice -= item.price;
        state.totalQuantity--;
        state.totalPrice -= item.price;
      } else if (item && item.quantity === 1) {
        // Remove item if quantity drops to 0
        state.totalQuantity--;
        state.totalPrice -= item.price;
        state.products = state.products.filter((p) => p.id !== id);
      }
    },

   
  },
});

export const { addCart, removeCart, increase, decrease} =
  CartSlice.actions;
export default CartSlice.reducer;
