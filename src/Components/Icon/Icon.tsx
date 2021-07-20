import React from 'react';

import IconMap from './IconMap';

import {Svg, View} from '~/Components';

type IconShapeType = 'filled' | 'outlined';

type Props = React.ComponentProps<typeof Svg> & {
  name: keyof typeof IconMap;
  size?: number;
  shape?: IconShapeType;
  color?: string;
};

export default (props: Props): React.ReactElement => {
  const {name, shape = 'filled', size = 24, color = '#000'} = props;

  const icon = IconMap[name][shape] || IconMap[name].outlined;

  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Svg
        style={{width: '100%', height: '100%', color}}
        viewBox="0 0 24 24"
        {...props}
        fill={color}
      >
        {icon}
      </Svg>
    </View>
  );
};
