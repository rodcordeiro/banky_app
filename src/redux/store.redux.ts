import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import createSecureStore from 'redux-persist-expo-securestore';

import authSlice from './slices/auth/auth.slice';

const reducer = combineReducers({
  auth: authSlice,
});

const storage = createSecureStore();

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    version: 1,
  },
  reducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistedStore = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
