import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text, View} from '~/Components';
import Certificate from '~/Screen/Certificate';
import Home2 from '~/Screen/Home2';

const Tab = createMaterialTopTabNavigator();

const TabBar = ({
  state,
  descriptors,
  navigation,
  position,
}: MaterialTopTabBarProps) => (
  <View style={{paddingVertical: 20}} row>
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
          style={{marginLeft: 20}}
          testID={options.tabBarTestID}
          onLongPress={onLongPress}
          onPress={onPress}
        >
          {/* <Animated.Text style={{opacity}}>{label}</Animated.Text> */}
          <Text
            color={isFocused ? '#2C77FD' : '#DBDBDB'}
            underline={isFocused}
            bold
            large
          >
            {label}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

const Tabs = () => (
  <Tab.Navigator
    tabBar={(props: MaterialTopTabBarProps) => <TabBar {...props} />}
  >
    <Tab.Screen component={Home2} name="홈" />
    <Tab.Screen component={Certificate} name="증명서" />
  </Tab.Navigator>
);

export default (): React.ReactElement => <Tabs />;
