import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {RootStack} from '../Constants';

import {Terms} from '~/Assets/Svg';
import {Button, Icon, Text, View} from '~/Components';

export default (): React.ReactElement => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{justifyContent: 'center', alignItems: 'center'}} fill>
        <Terms />
        <Text style={{marginTop: 35}} bold large>
          약관을 확인해주세요
        </Text>
      </View>
      <View style={{padding: 20}}>
        <Text>약관 전체 동의</Text>
        <View
          style={{
            marginVertical: 15,
            borderTopWidth: 1,
            borderTopColor: '#D5D5D5',
          }}
        />
        <View style={{justifyContent: 'space-between'}} row>
          <Text small>개인정보 수집 및 이용</Text>
          <Icon color="#797979" name="keyboard_arrow_right" />
        </View>
        <View style={{justifyContent: 'space-between', marginTop: 15}} row>
          <Text small>이용약관 동의</Text>
          <Icon color="#797979" name="keyboard_arrow_right" />
        </View>
      </View>
      <Button
        title="모두 동의"
        onPress={() => navigation.navigate(RootStack.UserCertificateGuide)}
      />
    </>
  );
};
