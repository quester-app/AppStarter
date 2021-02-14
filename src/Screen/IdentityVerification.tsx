import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {WebViewMessageEvent} from 'react-native-webview';

import {WebView} from '~/Components';
import {RootStack} from '~/Constants';

export default (): React.ReactElement => {
  const navigation = useNavigation();

  const onMessage = (e: WebViewMessageEvent) => {
    const {data} = e.nativeEvent;
    const {type, data: result} = JSON.parse(data) || {};
    if (type === 'success') {
      console.log(result);
      navigation.navigate(RootStack.Home);
    }
  };

  return (
    <WebView
      originWhitelist={['*']}
      source={{uri: 'http://localhost:8888/checkplus_main'}}
      onMessage={onMessage}
    />
  );
};
