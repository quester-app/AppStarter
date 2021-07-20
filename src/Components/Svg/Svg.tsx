import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import Svg from 'react-native-svg';

type Props = React.ComponentProps<typeof Svg> & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle & TextStyle>;
};

export default (props: Props): React.ReactElement => (
  <Svg focusable={false} pointerEvents="none" {...props} />
);
