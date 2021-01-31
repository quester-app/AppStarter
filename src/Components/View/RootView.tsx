import React from 'react';

import View from '~/Components/View/View';

type Props = {
  children?: React.ReactNode;
};

export default (props: Props): React.ReactElement => {
  const {children} = props;

  return (
    <View collapsable={false} pointerEvents="box-none" fill safe>
      <View fill keyboardAvoiding>
        {children}
      </View>
    </View>
  );
};
