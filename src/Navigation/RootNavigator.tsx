import AsyncStorage from '@react-native-community/async-storage';
import FirebaseAnalytics from '@react-native-firebase/analytics';
import {
  InitialState,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useRef, useState} from 'react';
import {Linking} from 'react-native';
import '~/Navigation/GestureHandler';

import BottomTabNavigator from './BottomTabNavigator';

import {BackgroundLoader} from '~/Components';
import {NAVIGATION_PERSISTENCE_KEY, RootStack} from '~/Constants';
import {useThemeContext} from '~/Provider';
import * as Screens from '~/Screen';
import {RootStackParamList} from '~/Types';

const Stack = createStackNavigator<RootStackParamList>();

const RootScreens: {
  [P in keyof typeof RootStack]?: typeof Screens[keyof typeof Screens];
} = {
  [RootStack.InitialGuide]: Screens.InitialGuide,
  [RootStack.TermsCheck]: Screens.TermsCheck,
  [RootStack.UserCertificateCheck]: Screens.UserCertificateCheck,
  [RootStack.UserCertificateGuide]: Screens.UserCertificateGuide,
  [RootStack.UserCertificate]: Screens.UserCertificate,
  [RootStack.PermissionGuide]: Screens.PermissionGuide,
  // [RootStack.My]: Screens.My,
  [RootStack.Home2]: Screens.Home2,
  // [RootStack.Certificate]: Screens.Certificate,
  [RootStack.Page2]: Screens.Page2,
  [RootStack.IdentityVerification]: Screens.IdentityVerification,
  [RootStack.Chatbot]: Screens.Chatbot,
  [RootStack.Main]: BottomTabNavigator,
  [RootStack.NotificationSetting]: Screens.NotificationSetting,
  [RootStack.PrivacyPolicy]: Screens.PrivacyPolicy,
  [RootStack.ServiceTerms]: Screens.ServiceTerms,
};

const analytics = () => ({
  logScreenView: async ({
    screenName,
    screenClass,
  }: {
    screenName?: string;
    screenClass?: string;
  }) => {
    FirebaseAnalytics().logScreenView({
      screen_name: screenName,
      screen_class: screenClass,
    });
  },
});

export default (): React.ReactElement | null => {
  const {theme} = useThemeContext();

  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState<InitialState | undefined>();
  const navigationRef = useRef<NavigationContainerRef>(null);
  const routeNameRef = useRef<string>();

  const stackScreens = Object.entries(RootScreens) as [
    RootStack,
    typeof Screens[keyof typeof Screens],
  ][];

  useEffect(() => {
    const restoreState = async () => {
      const initialUrl = await Linking.getInitialURL();

      if (initialUrl === null) {
        const savedState = await AsyncStorage.getItem(
          NAVIGATION_PERSISTENCE_KEY,
        );
        const state = savedState ? JSON.parse(savedState) : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }
      }

      await SplashScreen.hideAsync();
      setIsReady(true);
    };

    restoreState();
  }, []);

  if (!isReady) return null;

  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={BackgroundLoader}
      initialState={initialState}
      theme={theme}
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={async state => {
        AsyncStorage.setItem(NAVIGATION_PERSISTENCE_KEY, JSON.stringify(state));

        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screenName: currentRouteName,
            screenClass: currentRouteName,
          });
        }

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}
    >
      <Stack.Navigator
        headerMode="none"
        initialRouteName={RootStack.InitialGuide}
      >
        {stackScreens.map(([name, component]) => (
          <Stack.Screen key={name} component={component} name={name} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
