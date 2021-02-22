# AppStarter

## App Icon

- [App Icon Generator](https://appicon.co/)
- [Android Asset Studio Launcher Icon Generator](http://romannurik.github.io/AndroidAssetStudio/index.html)
- Android Icon Path: android/app/src/main/res
- IOS path: xed ./ios && %APP_NAME%/%APP_NAME%/Images.xcassets

## Splash Screen

- yarn expo-splash-screen -h
- ex) yarn expo-splash-screen -i ./src/Assets/Images/splash.png -b '#F44336'

## Setting up Gradle variables

- Edit the file ~/.gradle/gradle.properties

```text
RELEASE_STORE_FILE=release-key.keystore
RELEASE_KEY_ALIAS=release-key-alias
RELEASE_STORE_PASSWORD=*****
RELEASE_KEY_PASSWORD=*****
```
