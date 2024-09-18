import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartItemReducer from '../reduxFeatures/reducers/cartItemsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { authApi } from './Slices/auth.slice.';
import setUserReducer from '../reduxFeatures/reducers/users.slice';
import { foodApi } from './Slices/foodCart.slice';

const persistConfig = {
  key: 'cartItems',
  storage,
};

const rootReducer = combineReducers({
  cartItem: cartItemReducer,
  setUser: setUserReducer,
  [authApi.reducerPath]: authApi.reducer,
  [foodApi.reducerPath]: foodApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(authApi.middleware, foodApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
