import { useState, useLayoutEffect, useCallback } from 'react';
import * as SecureStore from 'expo-secure-store';

export type LooseAutoComplete<T extends string | number> =
  | T
  | Omit<string | number, T>;

type Response<T> = [T, (value: T) => void];

type Keys = 'authenticated' | 'refreshToken' | 'expiration';

function usePersistedState<T>(
  key: LooseAutoComplete<Keys>,
  initialState: T,
): Response<T> {
  const [state, setState] = useState<T>(initialState);

  useLayoutEffect(() => {
    const getTheme = async () => {
      const t = await SecureStore.getItemAsync(key as string);
      setState(t ? JSON.parse(String(t)) : initialState);
      await SecureStore.setItemAsync(key as string, JSON.stringify(state));
    };
    getTheme();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const updateState = useCallback(
    async (value: T) => {
      setState(value);
      await SecureStore.setItemAsync(key as string, JSON.stringify(value));
    },
    [key],
  );
  return [state, updateState];
}

export default usePersistedState;
