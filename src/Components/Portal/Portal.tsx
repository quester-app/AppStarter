import React, {memo, useEffect} from 'react';

import {usePortalContext} from '~/Provider/PortalProvider';

type props = {children?: React.ReactNode};

export default memo(
  (props: props): React.ReactElement => {
    const {children} = props;
    const {addPortal, removePortal} = usePortalContext();

    useEffect(() => {
      const key = addPortal(children);

      return () => {
        removePortal(key);
      };
    }, [addPortal, children, removePortal]);

    return <></>;
  },
);
