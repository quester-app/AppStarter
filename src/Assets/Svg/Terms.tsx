import React from 'react';
import {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

import {Svg} from '~/Components/Svg';

type Props = React.ComponentProps<typeof Svg>;

export default (props: Props): React.ReactElement => (
  <Svg height={70} viewBox="0 0 70 70" width={70} {...props}>
    <Path
      d="M12.16 35.171h-.845c-5.102 0-9.47 3.102-11.315 7.506V7.505A12.253 12.253 0 0111.315 0h.844v35.171z"
      fill="#5F8DDE"
    />
    <Path
      d="M58.685 8.362L12.16 8.328v26.843h-.844c-5.102 0-9.47 3.102-11.315 7.506v4.104a12.258 12.258 0 0011.315 7.497l46.526.043V27.469h.844c5.102 0 9.47-3.102 11.315-7.506V15.86a12.263 12.263 0 00-11.315-7.497z"
      fill="url(#prefix__paint0_linear)"
    />
    <Path
      d="M57.84 27.47h.845c5.102 0 9.471-3.102 11.315-7.506v35.171a12.258 12.258 0 01-11.315 7.497h-.844V27.469z"
      fill="#5F8DDE"
    />
    <Path
      d="M42.55 27.897a5.894 5.894 0 00-5.89-5.891 5.894 5.894 0 00-5.891 5.89 5.894 5.894 0 003.468 5.372l-1.369 9.05h7.583l-1.369-9.05a5.887 5.887 0 003.469-5.371z"
      fill="#003491"
    />
    <Defs>
      <LinearGradient
        gradientUnits="userSpaceOnUse"
        id="prefix__paint0_linear"
        x1={35}
        x2={35}
        y1={8.328}
        y2={54.321}
      >
        <Stop stopColor="#4E8CFA" />
        <Stop offset={1} stopColor="#4E8CFA" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
