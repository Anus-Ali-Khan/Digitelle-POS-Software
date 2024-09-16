import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reduxFeatures/cartCounter/cartCounterSlice';
import cartItemReducer from '../reduxFeatures/cartCounter/cartItemsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartItem: cartItemReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
