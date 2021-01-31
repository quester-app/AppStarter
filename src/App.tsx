import React from 'react';
import {LogBox, StatusBar} from 'react-native';

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

export default (): React.ReactElement => (
  <>
    <StatusBar barStyle="dark-content" />
    <RootProvider>
      <RootView>
        <RootNavigator />
      </RootView>
    </RootProvider>
  </>
);
