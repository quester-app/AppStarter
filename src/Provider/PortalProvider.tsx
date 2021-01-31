import React, {memo, useEffect, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';

import {View} from '~/Components';
import {createContext} from '~/Utils/createContext';

type Props = {
  children: React.ReactNode;
};

type Context = {
  addPortal: (children?: React.ReactNode) => number;
  removePortal: (key: number) => void;
};

type PortalType = {
  key?: number;
  children?: React.ReactNode;
};

type PortalProps = {children?: React.ReactNode};

const [useContext, Provider] = createContext<Context>();

export const Portal = memo(
  (props: PortalProps): React.ReactElement => {
    const {children} = props;
    const {addPortal, removePortal} = useContext();

    useEffect(() => {
      const key = addPortal(children);

      return () => {
        removePortal(key);
      };
    }, [addPortal, children, removePortal]);

    return <></>;
  },
);

let key = 0;

const PortalProvider = memo(
  (props: Props): React.ReactElement => {
    const {children} = props;

    const [portals, setPortals] = useState<PortalType[]>([]);

    const addPortal = (children: React.ReactNode) => {
      setPortals((portals) => [...portals, {key, children}]);
      return key++;
    };

    const removePortal = (key: number) => {
      setPortals((portals) => portals.filter((value) => value.key !== key));
    };

    const context = useMemo(
      () => ({
        addPortal,
        removePortal,
      }),
      [],
    );

    return (
      <Provider value={context}>
        {children}
        {portals.map(({key, children: portal}) => (
          <View
            key={key}
            collapsable={false}
            pointerEvents="box-none"
            style={StyleSheet.absoluteFill}
          >
            {portal}
          </View>
        ))}
      </Provider>
    );
  },
);

export {useContext as usePortalContext, PortalProvider};
