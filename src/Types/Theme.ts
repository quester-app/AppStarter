import {Theme as NavigationTheme} from '@react-navigation/native';

export type ThemeColor = {
  disabledText: string;
  tint: string;
  buttonPrimaryBackground: string;
  buttonPrimaryText: string;
  buttonLightBackground: string;
  buttonLightText: string;
  disabledButton: string;
} & NavigationTheme['colors'];
