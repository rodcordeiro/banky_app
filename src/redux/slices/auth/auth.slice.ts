import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthResponseType, AuthStateType } from './types/auth.type';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    access_token: null,
    expiration: null,
  } as AuthStateType,
  reducers: {
    loginStart: (state) => {
      state.access_token = null;
      state.expiration = null;
    },
    login: (state, action: PayloadAction<AuthResponseType>) => {
      state.expiration = action.payload.expires;
      state.access_token = action.payload.accessToken;
    },
    logOut: (state) => {
      state.access_token = null;
      state.expiration = null;
    },
    loginError: (state) => {
      state.expiration = null;
      state.access_token = null;
    },
  },
});

export default authSlice.reducer;
export const { logOut, login, loginStart, loginError } = authSlice.actions;
