import React from 'react';
import {ActivityIndicator} from 'react-native';

import {BackdropView, View} from '~/Components/View';

export default (): React.ReactElement => (
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
);
