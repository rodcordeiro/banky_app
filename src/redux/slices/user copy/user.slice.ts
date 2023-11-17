import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Native as Sentry } from 'sentry-expo';

import { AuthenticatedUser, UserStateType } from './types/user.type';

const user = createSlice({
  name: 'user',
  initialState: {} as UserStateType,
  reducers: {
    defineUser: (state, action: PayloadAction<AuthenticatedUser>) => {
      Sentry.setUser({
        id: action.payload.id,
        username: action.payload.username,
      });
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.username = action.payload.username;
    },
    resetUser: (state) => {
      Sentry.setUser(null);
      state.name = null;
      state.id = null;
      state.createdAt = null;
      state.updatedAt = null;
      state.username = null;
    },
  },
});

export default user.reducer;
export const { defineUser, resetUser } = user.actions;
