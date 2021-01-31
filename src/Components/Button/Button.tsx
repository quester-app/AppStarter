import React from 'react';
import {Button, ButtonProps} from 'react-native';

type Props = ButtonProps & {};

export default (props: Props): React.ReactElement => {
  return <Button {...props} />;
};
