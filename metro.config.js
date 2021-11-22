/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// module.exports = {
//   transformer: {
//     assetPlugins: ['expo-asset/tools/hashAssetFiles'],
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };

// Learn more https://docs.expo.io/guides/customizing-metro
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {getDefaultConfig} = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.transformer.assetsPlugis = ['expo-asset/tools/hashAssetFiles'];
defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

module.exports = defaultConfig;
