export default ({...config}) => ({
  ...config,
  name: 'AppStarter',
  displayName: 'AppStarter',
  slug: 'appstarter',
  scheme: 'starter',
  version: '0.0.1',
  sdkVersion: '43.0.0',
  assetBundlePatterns: ['**/*'],
  android: {
    package: 'app.quester.AppStarter',
  },
  ios: {
    bundleIdentifier: 'app.quester.AppStarter',
    googleServicesFile: './GoogleService-info.plist',
  },
  splash: {
    image: './src/Assets/splash.png',
    backgroundColor: '#f44335',
    resizeMode: 'cover',
  },
});
