import LottieView, {AnimatedLottieViewProps} from 'lottie-react-native';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

type Props = AnimatedLottieViewProps & {
  isInverse?: boolean;
};

export default (props: Props) => {
  const {
    autoPlay = true,
    loop = true,
    isInverse = false,
    style,
    ...remain
  } = props;

  const lottieStyle: StyleProp<ViewStyle> = {
    width: '100%',
    // height: '100%',
    ...(isInverse ? {backgroundColor: 'black'} : {}),
  };

  return (
    <LottieView
      autoPlay={autoPlay}
      loop={loop}
      style={[style, lottieStyle]}
      enableMergePathsAndroidForKitKatAndAbove
      {...remain}
    />
  );
};
