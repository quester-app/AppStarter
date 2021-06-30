import React from 'react';
import {StatusBar} from 'react-native';

import View from '~/Components/View/View';

type Props = {
  children?: React.ReactNode;
};

export default (props: Props): React.ReactElement => {
  const {children} = props;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View collapsable={false} pointerEvents="box-none" fill safe>
        <View fill keyboardAvoiding>
          {children}
        </View>
      </View>
    </>
  );
};
