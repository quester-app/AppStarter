import React from 'react';

import {
  AuthProvider,
  PortalProvider,
  ThemeProvider,
  UIProvider,
} from '~/Provider';

type Props = {
  children: React.ReactNode;
};

export default (props: Props): React.ReactElement => {
  const {children} = props;

  return (
    <ThemeProvider>
      <UIProvider>
        <AuthProvider>
          <PortalProvider>{children}</PortalProvider>
        </AuthProvider>
      </UIProvider>
    </ThemeProvider>
  );
};
