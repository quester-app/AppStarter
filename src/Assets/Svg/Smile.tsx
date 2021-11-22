import React from 'react';
import {Path} from 'react-native-svg';

import {Svg} from '~/Components/Svg';

export default (): React.ReactElement => (
  <Svg height={25} viewBox="0 0 30 25" width={30}>
    <Path
      d="M6 8a4 4 0 100-8 4 4 0 000 8zM27.61 2.462h-9v3h9v-3zM15 20.127c-4.013 0-7.536-2.078-9.575-5.216H0c2.448 5.883 8.242 10.032 15 10.032 6.758 0 12.56-4.15 15-10.032h-5.425c-2.039 3.138-5.562 5.216-9.575 5.216z"
      fill="#fff"
    />
  </Svg>
);
