import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactElement} from 'react';

import '~/Navigation/GestureHandler';
import {RootStack} from '~/Constants';
import {useThemeContext} from '~/Provider';
import * as Screens from '~/Screen';
import {RootStackParamList} from '~/Types';

const Stack = createStackNavigator<RootStackParamList>();

const NavigatorScreens: React.ComponentProps<typeof Stack.Screen>[] = [
  {name: RootStack.Home, component: Screens.Home},
  {
    name: RootStack.Page2,
    component: Screens.Page2,
    options: {animationEnabled: false},
  },
  {
    name: RootStack.IdentityVerification,
    component: Screens.IdentityVerification,
  },
  {
    name: RootStack.Chatbot,
    component: Screens.Chatbot,
  },
];

export default (): ReactElement => {
  const {theme} = useThemeContext();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator headerMode="none" initialRouteName={RootStack.Chatbot}>
        {NavigatorScreens.map((screen) => (
          <Stack.Screen key={screen.name} {...screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
