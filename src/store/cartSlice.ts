import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  productId: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
  customizationKey: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.customizationKey === action.payload.customizationKey
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },

    increaseQty(state, action: PayloadAction<number>) {
      const item = state.items.find(
        (i) => i.productId === action.payload
      );
      if (item) item.quantity += 1;
    },

    decreaseQty(state, action: PayloadAction<number>) {
      const item = state.items.find(
        (i) => i.productId === action.payload
      );
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;