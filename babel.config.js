// module.exports = api => {
//   api.cache(true);

//   return {
//     presets: ['module:metro-react-native-babel-preset'],
//     plugins: [
//       [
//         'module-resolver',
//         {
//           root: ['.'],
//           extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
//           alias: {
//             '~': './src',
//           },
//         },
//       ],
//       'react-native-reanimated/plugin',
//     ],
//   };
// };

module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
          alias: {
            '~': './src',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
