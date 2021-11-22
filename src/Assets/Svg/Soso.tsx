import React from 'react';
import {Path} from 'react-native-svg';

import {Svg} from '~/Components/Svg';

export default (): React.ReactElement => (
  <Svg height={21} viewBox="0 0 30 21" width={30}>
    <Path
      d="M6 8a4 4 0 100-8 4 4 0 000 8zM27.61 2.462h-9v3h9v-3zM30 15H0v5.334h30V15z"
      fill="#fff"
    />
  </Svg>
);
