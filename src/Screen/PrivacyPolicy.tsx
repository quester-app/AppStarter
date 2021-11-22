import React from 'react';
import WebView from 'react-native-webview';

import {View} from '~/Components';

export default (): React.ReactElement => {
  return (
    <View fill>
      <WebView
        originWhitelist={['*']}
        source={{
          uri: 'https://broad-recess-88e.notion.site/3fdfed0ffc2740498ccd94a7e1f2555e',
        }}
        fill
      />
    </View>
  );
};
