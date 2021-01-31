import {ThemeColor} from '~/Types/Theme';

export enum ThemeType {
  Light = 'light',
  Dark = 'dark',
}

export const colors = {
  skyBlue: '#069ccd',
  whiteGray: '#f7f6f3',
  dusk: 'rgb(65,77,107)',
  green: 'rgb(29,211,168)',
  greenBlue: 'rgb(36,205,151)',
  mediumGray: 'rgb(134,154,183)',
  paleGray: 'rgb(221,226,236)',
  lightBackground: 'white',
  lightBackgroundLight: '#f7f6f3',
  darkBackground: '#323739',
  darkBackgroundLight: '#393241',
};

export const Light: ThemeColor = {
  primary: 'white',
  background: colors.lightBackground,
  card: 'white',
  text: 'black',
  border: 'darkgray',
  notification: 'gray',
  disabledText: '#969696',
  tint: '#333333',
  buttonPrimaryBackground: colors.skyBlue,
  buttonPrimaryText: 'white',
  buttonLightBackground: colors.whiteGray,
  buttonLightText: 'black',
  disabledButton: 'rgb(224,224,224)',
};

export const Dark: ThemeColor = {
  primary: 'black',
  background: colors.darkBackground,
  card: 'black',
  text: 'white',
  border: 'lightgray',
  notification: 'gray',
  disabledText: '#969696',
  tint: '#a3a3a3',
  buttonPrimaryBackground: colors.skyBlue,
  buttonPrimaryText: 'white',
  buttonLightBackground: colors.whiteGray,
  buttonLightText: 'black',
  disabledButton: 'rgb(224,224,224)',
};
