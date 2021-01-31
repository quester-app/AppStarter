import React, {ComponentProps} from 'react';

import Button from './Button';

type Props = ComponentProps<typeof Button> & {};

export default (props: Props): React.ReactElement => {
  return <Button {...props} />;
};
