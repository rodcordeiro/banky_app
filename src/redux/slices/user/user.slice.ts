import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthenticatedUser, UserStateType } from './types/user.type';

const user = createSlice({
  name: 'user',
  initialState: {} as UserStateType,
  reducers: {
    defineUser: (state, action: PayloadAction<AuthenticatedUser>) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.username = action.payload.username;
    },
  },
});

export default user.reducer;
export const { defineUser } = user.actions;
