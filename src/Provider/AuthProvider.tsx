import React, {useMemo, useState} from 'react';

import {User} from '~/Types';
import {createContext} from '~/Utils/createContext';

type Props = {
  children: React.ReactNode;
};

type Context = {
  user: User | null;
  setUser: (value: User) => void;
};

const [useContext, Provider] = createContext<Context>();

const AuthProvider = (props: Props): React.ReactElement => {
  const {children} = props;

  const [user, setUser] = useState<User | null>(null);

  const context = useMemo(() => ({user, setUser}), [user]);

  return <Provider value={context}>{children}</Provider>;
};

export {useContext as useAuthContext, AuthProvider};
