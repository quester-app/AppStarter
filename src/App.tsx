import * as SplashScreen from 'expo-splash-screen';
import React, {useCallback, useEffect, useState} from 'react';
// import {LogBox} from 'react-native';
import {enableScreens} from 'react-native-screens';

import {RootView} from '~/Components';
import RootNavigator from '~/Navigation/RootNavigator';
import RootProvider from '~/Provider/RootProvider';

// LogBox.ignoreLogs([
//   // 'Warning: isMounted(...) is deprecated', // works
//   // 'Module RCTImageLoader', // works
//   'Require cycle: node_modules', // doesn't work
//   'Expected style',
//   'componentWillMount',
// ]);

enableScreens();

export default () => {
  const [isReady, setIsReady] = useState(false);

  const restoreState = async () => {
    //
  };

  useEffect(() => {
    const prepareResources = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await restoreState();
      } catch (e) {
        // console.warn(e);
      } finally {
        setIsReady(true);
      }
    };

    prepareResources();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) return null;

  return (
    <RootProvider>
      <RootView onLayout={onLayoutRootView}>
        <RootNavigator />
      </RootView>
    </RootProvider>
  );
};
