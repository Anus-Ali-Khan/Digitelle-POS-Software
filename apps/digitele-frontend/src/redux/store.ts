import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartItemReducer from '../reduxFeatures/reducers/cartItemsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { authApi } from './Slices/auth.slice.';
import userReducer from '../reduxFeatures/reducers/users.slice';
import { foodApi } from './Slices/foodCart.slice';
import { categoryApi } from './Slices/addcategory.slice';

const persistConfig = {
  key: 'cartItems',
  whitelist: ['cartItem', 'userReducer'],
  storage,
};

const rootReducer = combineReducers({
  cartItem: cartItemReducer,
  userReducer: userReducer,
  [authApi.reducerPath]: authApi.reducer,
  [foodApi.reducerPath]: foodApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      authApi.middleware,
      foodApi.middleware,
      categoryApi.middleware
    ),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
