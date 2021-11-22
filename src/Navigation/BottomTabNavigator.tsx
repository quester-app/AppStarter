import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Icon, Text, View} from '~/Components';
import * as Screens from '~/Screen';

const TabItems: {
  [key: string]: {
    icon: string;
    name: string;
  };
} = {
  my: {
    icon: 'sentiment_satisfied',
    name: '마이코윈',
  },
  qrcheck: {
    icon: 'photo_camera',
    name: '상대방 인증하기',
  },
  settings: {
    icon: 'setting',
    name: '설정',
  },
};

const Tab = createBottomTabNavigator();

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{borderTopColor: '#D9DDE3', borderTopWidth: 1}} row>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          // eslint-disable-next-line no-nested-ternary
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={`${label}`}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            style={{flex: 1}}
            testID={options.tabBarTestID}
            onLongPress={onLongPress}
            onPress={onPress}
          >
            <View style={{alignItems: 'center', padding: 15}}>
              <Icon
                color={isFocused ? '#673ab7' : '#222'}
                name={TabItems[route.name].icon}
              />
              <Text
                color={isFocused ? '#673ab7' : '#222'}
                style={{marginTop: 3}}
                xxSmall
              >
                {TabItems[route.name].name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// const stackScreens = Object.entries(RootScreens) as [
//   RootStack,
//   typeof Screens[keyof typeof Screens],
// ][];

export default (): React.ReactElement => {
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen component={Screens.My} name="my" />
      <Tab.Screen component={Screens.Scanner} name="qrcheck" />
      <Tab.Screen component={Screens.Settings} name="settings" />
    </Tab.Navigator>
  );
};
