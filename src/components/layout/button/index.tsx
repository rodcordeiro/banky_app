import { ReactNode } from 'react';
import {
  Text,
  Pressable,
  PressableProps,
  ActivityIndicator,
} from 'react-native';
import clsx from 'clsx';

function Button({
  children,
  loading = false,
  disabled,
  ...rest
}: { children: ReactNode; loading?: boolean } & PressableProps) {
  return (
    <Pressable
      {...rest}
      className={clsx(
        'w-full bg-electric-violet-600 p-4 m-2 rounded flex items-center justify-center',
        (loading || disabled) && 'bg-electric-violet-950 text-white/75',
      )}
    >
      {loading ? (
        <ActivityIndicator color={'white'} size={'small'} />
      ) : (
        <>{children}</>
      )}
    </Pressable>
  );
}

function ButtonText({ children }: { children: ReactNode }) {
  return <Text className="text-white font-semibold">{children}</Text>;
}

Button.ButtonText = ButtonText;
export { Button };
