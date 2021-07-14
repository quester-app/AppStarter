import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import WebView, {WebViewMessageEvent, WebViewProps} from 'react-native-webview';
import {
  WebViewErrorEvent,
  WebViewNavigationEvent,
} from 'react-native-webview/lib/WebViewTypes';

import Portal from '~/Components/Portal/Portal';
import BackdropView from '~/Components/View/BackdropView';
import View from '~/Components/View/View';

type Props = WebViewProps & {};

export default (props: Props): React.ReactElement => {
  const {
    onLoadStart: propOnLoadStart,
    onLoadEnd: propOnLoadEnd,
    onMessage: propOnMessage,
    ...rest
  } = props;
  const [webviewKey, setWebviewKey] = useState(0);
  const [loading, setLoading] = useState(true);

  const reload = () => {
    setWebviewKey((key: number) => key + 1);
  };

  const onMessage = (e: WebViewMessageEvent) => {
    if (propOnMessage) propOnMessage(e);
  };

  const onLoadStart = (e: WebViewNavigationEvent) => {
    setLoading(true);
    if (propOnLoadStart) propOnLoadStart(e);
  };
  const onLoadEnd = (e: WebViewNavigationEvent | WebViewErrorEvent) => {
    setLoading(false);
    if (propOnLoadEnd) propOnLoadEnd(e);
  };

  return (
    <>
      <WebView
        key={webviewKey}
        bounces={false}
        mediaPlaybackRequiresUserAction={false}
        style={{flex: 1}}
        useWebKit
        onContentProcessDidTerminate={reload}
        onLoadEnd={onLoadEnd}
        onLoadStart={onLoadStart}
        onMessage={onMessage}
        {...rest}
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
