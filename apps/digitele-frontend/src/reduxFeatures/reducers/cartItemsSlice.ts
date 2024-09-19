import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItemType = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

export interface CartItemState {
  cartItems: CartItemType[];
}

const initialState: CartItemState = {
  cartItems: [],
};

export const cartItemSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItemType>) => {
      const foundedItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (foundedItem) {
        state.cartItems = state.cartItems.map((item) => {
          if (item._id === foundedItem._id) {
            return { ...foundedItem, quantity: foundedItem.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
    removeCartItem: (state, action: PayloadAction<CartItemType>) => {
      const foundedItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (foundedItem) {
        state.cartItems = state.cartItems.filter((item) => {
          return item._id !== foundedItem._id;
        });
      }
    },
    decrement: (state, action: PayloadAction<CartItemType>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            quantity: item.quantity === 0 ? 0 : item.quantity - 1,
          };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addCartItem, removeCartItem, decrement } = cartItemSlice.actions;

export default cartItemSlice.reducer;
