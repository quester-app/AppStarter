import AppLoading from 'expo-app-loading';
import {Asset} from 'expo-asset';
import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import {Animated, Button, Platform, StyleSheet, Text, View} from 'react-native';

import splashImage from '~/Assets/Images/splash.png';

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

type AnimatedAppLoaderProps = {children: React.ReactNode; image: number};
type AnimatedSplashScreenProps = {children: React.ReactNode; image: number};

const AnimatedAppLoader = ({children, image}: AnimatedAppLoaderProps) => {
  const [isSplashReady, setSplashReady] = React.useState(false);

  const startAsync = React.useMemo(
    // If you use a local image with require(...), use `Asset.fromModule`
    () => async () => {
      await Asset.fromModule(image).downloadAsync();
    },
    [image],
  );

  const onFinish = React.useMemo(() => () => setSplashReady(true), []);

  if (!isSplashReady) {
    return (
      <AppLoading
        // Instruct SplashScreen not to hide yet, we want to do this manually
        autoHideSplash={false}
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
};

function AnimatedSplashScreen({children, image}: AnimatedSplashScreenProps) {
  const animation = React.useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = React.useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] =
    React.useState(false);

  React.useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [animation, isAppReady]);

  const onImageLoaded = React.useMemo(
    () => async () => {
      try {
        await SplashScreen.hideAsync();
        // Load stuff
        await Promise.all([]);
      } catch (e) {
        // handle errors
      } finally {
        setAppReady(true);
      }
    },
    [],
  );

  return (
    <View style={{flex: 1}}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: '#ffff',
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            fadeDuration={0}
            source={image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: Constants.manifest?.splash?.resizeMode || 'contain',
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            onLoadEnd={onImageLoaded}
          />
        </Animated.View>
      )}
    </View>
  );
}

type Props = {
  children: React.ReactNode;
};
export default ({children}: Props) => {
  return <AnimatedAppLoader image={splashImage}>{children}</AnimatedAppLoader>;
};
