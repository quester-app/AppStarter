import React from 'react';

type CreateContext<A> = readonly [
  () => A,
  React.ProviderExoticComponent<React.ProviderProps<A | undefined>>,
];

export const createContext = <A>(): CreateContext<A> => {
  const createdContext = React.createContext<A | undefined>(undefined);

  const useContext = () => {
    const context = React.useContext(createdContext);

    if (!context) {
      throw new Error('useContext must be inside a Provider with a value');
    }

    return context;
  };

  return [useContext, createdContext.Provider];
};
