import React from 'react';
import { PressableProps } from 'react-native';

export type ButtonProps = {
  content?: string;
  icon?: JSX.Element;
  isLoading?: boolean;
  customBackground?: CSSStyleRule['style']['backgroundColor'];
} & PressableProps;
