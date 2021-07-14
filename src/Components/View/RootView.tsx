import React from 'react';
import {StatusBar} from 'react-native';

import View from '~/Components/View/View';

type Props = React.ComponentProps<typeof View> & {
  children?: React.ReactNode;
};

export default (props: Props): React.ReactElement => {
  const {children, ...remain} = props;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View collapsable={false} pointerEvents="box-none" fill safe {...remain}>
        <View fill keyboardAvoiding>
          {children}
        </View>
      </View>
    </>
  );
};
