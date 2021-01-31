import color from 'color';
import React from 'react';
import {
  Animated,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';

import {Text} from '../Text';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const elevationOverlayTransparency: {[id: number]: number} = {
  1: 5,
  2: 7,
  3: 8,
  4: 9,
  5: 10,
  6: 11,
  7: 11.5,
  8: 12,
  9: 12.5,
  10: 13,
  11: 13.5,
  12: 14,
  13: 14.25,
  14: 14.5,
  15: 14.75,
  16: 15,
  17: 15.12,
  18: 15.24,
  19: 15.36,
  20: 15.48,
  21: 15.6,
  22: 15.72,
  23: 15.84,
  24: 16,
};

const calculateColor = (surfaceColor: string, elevation: number) => {
  let overlayTransparency: number;
  if (elevation >= 1 && elevation <= 24) {
    overlayTransparency = elevationOverlayTransparency[elevation];
  } else {
    overlayTransparency = elevationOverlayTransparency[elevation > 24 ? 24 : 1];
  }
  return color(surfaceColor)
    .mix(color('white'), overlayTransparency * 0.01)
    .hex();
};

const overlay = (
  elevation: number | Animated.Value = 1,
  surfaceColor: string,
) => {
  if (elevation instanceof Animated.Value) {
    const inputRange = [0, 1, 2, 3, 8, 24];
    elevation.interpolate({
      inputRange,
      outputRange: inputRange.map((elevation) => {
        return calculateColor(surfaceColor, elevation);
      }),
    });
  }
};

const SHADOW_COLOR = '#000000';
const SHADOW_OPACITY = 0.24;

const shadow = (elevation: number | Animated.Value = 0) => {
  if (elevation instanceof Animated.Value) {
    const inputRange = [0, 1, 2, 3, 8, 24];

    return {
      shadowColor: SHADOW_COLOR,
      shadowOffset: {
        width: new Animated.Value(0),
        height: elevation.interpolate({
          inputRange,
          outputRange: [0, 0.5, 0.75, 2, 7, 23],
        }),
      },
      shadowOpacity: new Animated.Value(SHADOW_OPACITY),
      shadowRadius: elevation.interpolate({
        inputRange,
        outputRange: [0, 0.75, 1.5, 3, 8, 24],
      }),
    };
  }
  if (elevation === 0) {
    return {};
  }

  let height;
  let radius;
  switch (elevation) {
    case 1:
      height = 0.5;
      radius = 0.75;
      break;
    case 2:
      height = 0.75;
      radius = 1.5;
      break;
    default:
      height = elevation - 1;
      radius = elevation;
  }

  return {
    shadowColor: SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height,
    },
    shadowOpacity: SHADOW_OPACITY,
    shadowRadius: radius,
  };
};

export default (props: Props): React.ReactElement => {
  const {children, style} = props;
  const {elevation = 4} = StyleSheet.flatten(style);
  const surfaceColor = 'white'; // #121212
  overlay(elevation, surfaceColor);

  return (
    <Animated.View
      style={[
        {backgroundColor: '#000000'},
        elevation ? shadow(elevation) : {},
        style,
      ]}
    >
      <TouchableWithoutFeedback>
        <Text>{children}</Text>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};
