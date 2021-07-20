import React from 'react';
import {Circle, Path} from 'react-native-svg';

type IconMapType = {
  [key: string]: {
    filled?: React.ReactChild;
    outlined?: React.ReactChild;
  };
};

const IconMap: IconMapType = {
  keyboard_arrow_left: {
    filled: (
      <>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
      </>
    ),
  },
  keyboard_arrow_right: {
    filled: (
      <>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
      </>
    ),
  },
  keyboard_arrow_up: {
    filled: (
      <>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </>
    ),
  },
  keyboard_arrow_down: {
    filled: (
      <>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </>
    ),
  },
  arros_back_ios: {
    filled: (
      <>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z" />
      </>
    ),
  },
  error: {
    outlined: (
      <Path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    ),
  },
  sentiment_satisfied: {
    outlined: (
      <>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Circle cx={15.5} cy={9.5} r={1.5} />
        <Circle cx={8.5} cy={9.5} r={1.5} />
        <Path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88a5.495 5.495 0 0010.24 0h-1.67c-.7 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      </>
    ),
  },
  photo_camera: {
    filled: (
      <>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Circle cx={12} cy={12} r={3.2} />
        <Path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      </>
    ),
    outlined: (
      <>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
      </>
    ),
  },
  menu: {
    outlined: (
      <>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </>
    ),
  },
  share: {
    outlined: (
      <>
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </>
    ),
  },
};

export default IconMap;
