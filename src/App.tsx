// import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';
import React, {useCallback, useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import {enableScreens} from 'react-native-screens';

import {RootView /* Splash */} from '~/Components';
import RootNavigator from '~/Navigation/RootNavigator';
import RootProvider from '~/Provider/RootProvider';

// console.log(Constants.systemFonts);

LogBox.ignoreLogs([
  // 'Warning: isMounted(...) is deprecated', // works
  // 'Module RCTImageLoader', // works
  'Require cycle: node_modules', // doesn't work
  'Overwriting fontFamily',
  // 'Expected style',
  // 'componentWillMount',
]);

enableScreens();

export default () => {
  const [isReady, setIsReady] = useState(true);

  const restoreState = async () => {
    //
  };

  useEffect(() => {
    const prepareResources = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await restoreState();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
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

  console.log(111);

  return (
    <RootProvider>
      {/* <Splash> */}
      <RootView onLayout={onLayoutRootView}>
        <RootNavigator />
      </RootView>
      {/* </Splash> */}
    </RootProvider>
  );
};
