import React from 'react';
import {Path} from 'react-native-svg';

import {Svg} from '~/Components/Svg';

export default (): React.ReactElement => (
  <Svg height={29} viewBox="0 0 29 22" width={22}>
    <Path
      d="M6.273 7.72a3.86 3.86 0 100-7.72 3.86 3.86 0 000 7.72zM26.975 2.37h-8.63v2.988h8.63V2.369zM14.5 16.8c-3.88 0-7.285 2.072-9.255 5.2H0c2.366-5.864 7.968-10 14.5-10S26.642 16.136 29 22h-5.244c-1.971-3.12-5.377-5.2-9.256-5.2z"
      fill="#fff"
    />
  </Svg>
);
