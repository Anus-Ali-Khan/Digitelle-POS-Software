import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItemType = {
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
      }
    },
  },
});

// check the item existance in array (done)
// if present increase quantity
// not present so add it in array
