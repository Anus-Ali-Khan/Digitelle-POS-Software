import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartItemReducer from '../reduxFeatures/cartCounter/cartItemsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { authApi } from './Slices/auth.slice.';

const persistConfig = {
  key: 'cartItems',
  storage,
};

const rootReducer = combineReducers({
  cartItem: cartItemReducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(authApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
