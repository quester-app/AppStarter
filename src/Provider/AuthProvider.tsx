import * as SecureStore from 'expo-secure-store';
import React, {useEffect, useMemo, useState} from 'react';

import {User} from '~/Types';
import {createContext} from '~/Utils/createContext';

type Props = {
  children: React.ReactNode;
};

type Context = {
  user: User | null;
  userToken?: string | null;
  isLoading: boolean;
  setUser: (value: User) => void;
};

const [useContext, Provider] = createContext<Context>();

const AuthProvider = (props: Props): React.ReactElement => {
  const {children} = props;

  const [user, setUser] = useState<User | null>(null);
  const [userToken, setUserToken] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUserToken = () => {
    // if (!isLoading) {
    //   setIsLoading(true);
    // }
    setUserToken('');
    // setIsLoading(false);
  };

  const revokeUserToken = () => {
    setUserToken(undefined);
  };

  useEffect(() => {
    if (userToken === undefined) {
      fetchUserToken();
    }
  });

  const context = useMemo(
    () => ({user, userToken, isLoading, setUser}),
    [user, userToken, isLoading],
  );

  return <Provider value={context}>{children}</Provider>;
};

export {useContext as useAuthContext, AuthProvider};
