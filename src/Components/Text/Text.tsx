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

// 599
// 1 3.5
// 2 2.375
// 3 2
// 4 1.5625
// 5 1.25
// 6 1.125
// 7 1

// 959
// 4.7129
// 2.9167
// 2.5707
// 1.8219
// 1.3118
// 1.125
// 4.7129

// 1279
// 5.3556
// 3.3333
// 2.7849
// 2.0243
// 1.4993
// 1.25
// 5.3556

// 1920
// 5.9983
// 3.75
// 2.9991
// 2.0243
// 1.4993
// 1.25
// 5.9983

// 10px = 0.625rem
// 12px = 0.75rem
// 14px = 0.875rem
// 16px = 1rem (base)
// 18px = 1.125rem
// 20px = 1.25rem
// 24px = 1.5rem
// 30px = 1.875rem
// 32px = 2rem

// 'h1'
// | 'h2'
// | 'h3'
// | 'h4'
// | 'h5'
// | 'h6'
// | 'subtitle1'
// | 'subtitle2'
// | 'body1'
// | 'body2'
// | 'caption'
// | 'button'
// | 'overline'
// | 'srOnly'
// | 'inherit'

// const pxToRem = pxToRem2 || ((size) => `${(size / htmlFontSize) * coef}rem`);

// const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
//   fontFamily,
//   fontWeight,
//   fontSize: pxToRem(size),
//   // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
//   lineHeight,
//   // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
//   // across font-families can cause issues with the kerning.
//   ...(fontFamily === defaultFontFamily
//     ? { letterSpacing: `${round(letterSpacing / size)}em` }
//     : {}),
//   ...casing,
//   ...allVariants,
// })

// const variants = {
//   h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
//   h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
//   h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
//   h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
//   h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
//   h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
//   subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
//   subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
//   body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
//   body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
//   button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
//   caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
//   overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
// };

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
  const color = theme.colors.text;

  const style: TextStyle = {
    fontFamily,
    ...fontSize,
    color,
  };

  const componentProps: Props = {
    style: [style, customStyle],
    children,
    ...rest,
  };

  return <Text {...componentProps} />;
};
