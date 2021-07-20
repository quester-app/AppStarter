import React from 'react';
import {Text, TextStyle} from 'react-native';

import {useThemeContext} from '~/Provider/ThemeProvider';

export enum FontFamily {
  Roboto = 'Roboto',
}

export enum FontWeight {
  Thin = 'Thin',
  Light = 'Light',
  Regular = 'Regular',
  Medium = 'Medium',
  Bold = 'Bold',
  Black = 'Black',
}

export enum FontSize {
  xxSmall = 'xx-small',
  xSmall = 'x-small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  xLarge = 'x-large',
  xxLarge = 'xx-large',
  xxxLarge = 'xxx-large',
  xxxxLarge = 'xxxx-large',
}

const Family = {
  [FontFamily.Roboto]: {
    [FontWeight.Thin]: 'Roboto Thin',
    [FontWeight.Light]: 'Roboto Light',
    [FontWeight.Regular]: 'Roboto',
    [FontWeight.Medium]: 'Roboto Medium',
    [FontWeight.Bold]: 'Roboto Bold',
    [FontWeight.Black]: 'Roboto Black',
  },
};

const Size = {
  [FontSize.xxSmall]: {
    fontSize: 12,
    lineHeight: 12 * 1.66, // 2.66(overline)
    letterSpacing: 0.4,
  },
  [FontSize.xSmall]: {
    fontSize: 14,
    lineHeight: 14 * 1.43, // 1.57(subtitle2), 1.75(button)
    letterSpacing: 0.15,
  },
  [FontSize.Small]: {
    fontSize: 16,
    lineHeight: 16 * 1.5, // 1.75(subtitle1)
    letterSpacing: 0.15,
  },
  [FontSize.Medium]: {
    fontSize: 20,
    lineHeight: 20 * 1.6,
    letterSpacing: 0.15,
  },
  [FontSize.Large]: {
    fontSize: 24,
    lineHeight: 24 * 1.334,
    letterSpacing: 0,
  },
  [FontSize.xLarge]: {
    fontSize: 34,
    lineHeight: 34 * 1.235,
    letterSpacing: 0.25,
  },
  [FontSize.xxLarge]: {
    fontSize: 48,
    lineHeight: 48 * 1.167,
    letterSpacing: 0,
  },
  [FontSize.xxxLarge]: {
    fontSize: 60,
    lineHeight: 60 * 1.2,
    letterSpacing: -0.5,
  },
  [FontSize.xxxxLarge]: {
    fontSize: 96,
    lineHeight: 96 * 1.167,
    letterSpacing: -1.5,
  },
};

type Props = React.ComponentProps<typeof Text> & {
  children?: React.ReactNode;
  family?: keyof typeof Family;
  weight?: keyof typeof Family[keyof typeof Family];
  size?: keyof typeof Size;
  // weight
  thin?: boolean;
  light?: boolean;
  medium?: boolean;
  bold?: boolean;
  black?: boolean;
  // size
  xxSmall?: boolean;
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  xxLarge?: boolean;
  xxxLarge?: boolean;
  xxxxLarge?: boolean;
  // decoration
  underline?: boolean;
  color?: string;
};

export default (props: Props): React.ReactElement => {
  const {
    children,
    style: customStyle,
    weight,
    family,
    thin,
    light,
    medium,
    bold,
    black,
    size,
    xxSmall,
    xSmall,
    small,
    large,
    xLarge,
    xxLarge,
    xxxLarge,
    xxxxLarge,
    underline,
    color: textColor,
    ...rest
  } = props;

  const {theme} = useThemeContext();

  const fontWeight =
    weight ||
    (thin && FontWeight.Thin) ||
    (light && FontWeight.Light) ||
    (medium && FontWeight.Medium) ||
    (bold && FontWeight.Bold) ||
    (black && FontWeight.Black) ||
    FontWeight.Regular;
  const fontFamily = Family[family || FontFamily.Roboto][fontWeight];
  const fontSize =
    Size[
      size ||
        (xxSmall && FontSize.xxSmall) ||
        (xSmall && FontSize.xSmall) ||
        (small && FontSize.Small) ||
        (large && FontSize.Large) ||
        (xLarge && FontSize.xLarge) ||
        (xxLarge && FontSize.xxLarge) ||
        (xxxLarge && FontSize.xxxLarge) ||
        (xxxxLarge && FontSize.xxxxLarge) ||
        FontSize.Medium
    ];
  const textDecorationLine = underline ? 'underline' : 'none';
  const color = textColor || theme.colors.text;

  const style: TextStyle = {
    fontFamily,
    ...fontSize,
    textDecorationLine,
    color,
  };

  const componentProps: Props = {
    style: [style, customStyle],
    children,
    ...rest,
  };

  return <Text {...componentProps} />;
};
