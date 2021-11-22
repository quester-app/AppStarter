import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';

import {Icon, Text, View} from '~/Components';
import {RootStack} from '~/Constants';

export default (): React.ReactElement => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{justifyContent: 'center', padding: 20}} fill>
        <Text bold large>
          접근권한 안내
        </Text>
        <Text>선택적 접근권한 안내</Text>
        <View style={{marginTop: 50}}>
          <View row>
            <View
              style={{
                paddingRight: 20,
                justifyContent: 'center',
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#F3F6FC',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text>📷</Text>
              </View>
            </View>
            <View fill>
              <Text bold>카메라</Text>
              <View row>
                <Text color="#797979" style={{flexWrap: 'wrap', flex: 1}} small>
                  상대방의 QR코드의 검증을 위해 카메라 기능이 사용됩니다
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={{paddingHorizontal: 35}} row>
          <View style={{padding: 3}}>
            <Icon color="#FF0000" name="error" size={15} />
          </View>
          <Text color="#797979" xSmall>
            선택적 접근 권한은 기능 사용 시 허용이 필요하며 비 허용 시에도 기능
            외 서비스 이용이 가능합니다.
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <Button
            title="확인"
            onPress={() => navigation.navigate(RootStack.Main)}
          />
        </View>
      </View>
    </>
  );
};
