import React, {ComponentProps} from 'react';
import {StyleSheet} from 'react-native';

import View from './View';

type Props = ComponentProps<typeof View>;

export default (props: Props): React.ReactElement => {
  const {children, ...rest} = props;
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: 'rgba(0,0,0,0.75)',
          zIndex: 99999,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};
