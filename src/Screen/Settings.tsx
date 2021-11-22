import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import IconMap from '../Components/Icon/IconMap';
import {RootStack} from '../Constants';

import {Icon, Text, View} from '~/Components';

const menuItems = [
  // {
  //   title: '알림 설정',
  //   icon: 'notification',
  //   next: RootStack.NotificationSetting,
  // },
  // {title: '서비스이용약관', next: RootStack.ServiceTerms},
  {title: '개인정보처리방침', next: RootStack.PrivacyPolicy},
];
export default (): React.ReactElement => {
  const navigation = useNavigation();

  return (
    <View fill>
      <View style={{padding: 20}}>
        <Text bold large>
          설정
        </Text>
      </View>
      {menuItems.map(item => (
        <TouchableOpacity
          key={item.title}
          onPress={() => navigation.navigate(item.next)}
        >
          <View
            style={{
              padding: 20,
              alignItems: 'center',
            }}
            row
          >
            {item.icon && (
              <Icon
                name={item.icon as keyof typeof IconMap}
                style={{marginRight: 15}}
              />
            )}
            <Text small>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
