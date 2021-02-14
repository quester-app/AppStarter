import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import {enableScreens} from 'react-native-screens';

import {RootView} from '~/Components';
import RootNavigator from '~/Navigation/RootNavigator';
import RootProvider from '~/Provider/RootProvider';

LogBox.ignoreLogs([
  // 'Warning: isMounted(...) is deprecated', // works
  // 'Module RCTImageLoader', // works
  'Require cycle: node_modules', // doesn't work
  'Expected style',
  'componentWillMount',
]);

enableScreens();

export default (): React.ReactElement | null => {
  const [isReady, setIsReady] = useState(false);

  const restoreState = async () => {
    //
  };

  useEffect(() => {
    const prepareResources = async () => {
      try {
        await restoreState();
      } finally {
        setIsReady(true);
      }
    };

    SplashScreen.preventAutoHideAsync().finally(() => prepareResources());
  }, []);

  if (!isReady) return null;

  return (
    <RootProvider>
      <RootView>
        <RootNavigator />
      </RootView>
    </RootProvider>
  );
};
