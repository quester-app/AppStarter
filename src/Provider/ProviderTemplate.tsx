import React, {useMemo} from 'react';

import {createContext} from '~/Utils/createContext';

type Props = {
  children: React.ReactNode;
};

type Context = {};

const [useContext, Provider] = createContext<Context>();

const TemplateProvider = (props: Props): React.ReactNode => {
  const {children} = props;

  const context = useMemo(() => ({}), []);

  return <Provider value={context}>{children}</Provider>;
};

export {useContext as useTemplateContext, TemplateProvider};
