import AsyncStorage from '@react-native-community/async-storage';
import {Theme as NavigationTheme} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {Appearance, ColorSchemeName} from 'react-native';

import {Dark, Light, THEME_PERSISTENCE_KEY, ThemeType} from '~/Constants';
import {createContext} from '~/Utils/createContext';

type Props = {
  children: React.ReactNode;
};

type Context = {
  themeType: ThemeType;
  theme: NavigationTheme;
  setThemeType: (type: ThemeType) => void;
};

const [useContext, Provider] = createContext<Context>();

const changeTheme = (themeType: ThemeType): NavigationTheme => {
  const isDark = themeType === ThemeType.Dark;

  return {
    dark: isDark,
    colors: isDark ? Dark : Light,
  };
};

const ThemeProvider = (props: Props): React.ReactElement => {
  const {children} = props;

  const [themeType, setThemeType] = useState<ThemeType>(ThemeType.Light);
  const [theme, setTheme] = useState<NavigationTheme>(changeTheme(themeType));

  useEffect(() => {
    const fetchTheme = async () => {
      let colorScheme = (await AsyncStorage.getItem(
        THEME_PERSISTENCE_KEY,
      )) as ColorSchemeName;

      if (!colorScheme) {
        colorScheme = Appearance.getColorScheme();
      }

      const type =
        colorScheme === ThemeType.Dark ? ThemeType.Dark : ThemeType.Light;
      setThemeType(type);
    };

    const changeListener = ({colorScheme}: {colorScheme: ColorSchemeName}) => {
      const type =
        colorScheme === ThemeType.Dark ? ThemeType.Dark : ThemeType.Light;
      setThemeType(type);
      setTheme(changeTheme(type));
    };
    Appearance.addChangeListener(changeListener);
    fetchTheme();

    return () => {
      Appearance.removeChangeListener(changeListener);
    };
  }, []);

  const context = useMemo(() => ({themeType, theme, setThemeType}), [
    themeType,
    theme,
  ]);

  return <Provider value={context}>{children}</Provider>;
};

export {useContext as useThemeContext, ThemeProvider};
