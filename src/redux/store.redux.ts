import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import createSecureStore from 'redux-persist-expo-securestore';
import { Native as Sentry } from 'sentry-expo';

import authSlice from './slices/auth/auth.slice';
import userSlice from './slices/user/user.slice';

const reducer = combineReducers({
  auth: authSlice,
  user: userSlice,
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

const sentryReduxEnhancer = Sentry.createReduxEnhancer({});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  enhancers: [sentryReduxEnhancer],
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
