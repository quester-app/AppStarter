import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import WebView, {WebViewMessageEvent} from 'react-native-webview';

import {BackdropView, View} from '~/Components';
import {RootStack} from '~/Constants';
import {Portal} from '~/Provider';

export default (): React.ReactElement => {
  const navigation = useNavigation();
  const [webviewKey, setWebviewKey] = useState(0);
  const [loading, setLoading] = useState(true);

  const reload = () => {
    setWebviewKey((key) => key + 1);
  };

  const onMessage = (e: WebViewMessageEvent) => {
    const {data} = e.nativeEvent;
    const {type, data: result} = JSON.parse(data) || {};
    console.log(data);
    if (type === 'success') {
      // Alert.alert(type);
      navigation.navigate(RootStack.Home);
    }
  };

  return (
    <>
      <WebView
        key={webviewKey}
        bounces={false}
        mediaPlaybackRequiresUserAction={false}
        originWhitelist={['*']}
        source={{uri: 'http://localhost:8888/checkplus_main'}}
        style={{flex: 1}}
        useWebKit
        onContentProcessDidTerminate={reload}
        onLoadEnd={() => {
          setLoading(false);
        }}
        onLoadStart={() => {
          setLoading(true);
        }}
        onMessage={onMessage}
      />
      {loading && (
        <Portal>
          <BackdropView>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator size="large" />
            </View>
          </BackdropView>
        </Portal>
      )}
    </>
  );
};
