import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItemType = {
  id: number;
  name: string;
  price: string;
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
        (item) => item.id === action.payload.id
      );
      if (foundedItem) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === foundedItem.id) {
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
        (item) => item.id === action.payload.id
      );
      if (foundedItem) {
        state.cartItems = state.cartItems.filter((item) => {
          return item.id !== foundedItem.id;
        });
      }
    },
    decrement: (state, action: PayloadAction<CartItemType>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...action.payload, quantity: action.payload.quantity - 1 };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addCartItem, removeCartItem, decrement } = cartItemSlice.actions;

export default cartItemSlice.reducer;
