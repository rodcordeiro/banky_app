import React from 'react';

import { useRedux } from '@/hooks';
import { store } from '@/redux/store.redux';
import { defineUser } from '@/redux/actions.redux';

import { GetUserRequest } from '../api/home.requests';

export function useHomeHook() {
  const user = useRedux().useAppSelector((state) => state.user);
  const dispatch = store.dispatch;

  React.useLayoutEffect(() => {
    if (!user.id) {
      GetUserRequest().then(({ data }) => {
        dispatch(defineUser(data));
      });
    }
  }, [user]);

  return { user };
}
