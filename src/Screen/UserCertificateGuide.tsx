import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Button, Text, View} from '~/Components';
import {RootStack} from '~/Constants';

export default (): React.ReactElement => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{justifyContent: 'center', padding: 20}} fill>
        <Text bold large>
          본인인증 안내
        </Text>

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
                <Text>👤</Text>
              </View>
            </View>
            <View fill>
              <Text bold>본인명의 기기로 인증 가능</Text>
              <View row>
                <Text color="#797979" style={{flexWrap: 'wrap', flex: 1}} small>
                  안전한 서비스이용을 위해 보인인증이 필요합니다. 다양한
                  본인인증 수단들이 추가될 예정입니다.{' '}
                  <Text color="blue" small underline>
                    자세히보기
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 25}} row>
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
                <Text>📱</Text>
              </View>
            </View>
            <View fill>
              <Text bold>한 사람당 한 기기만 허용</Text>
              <View row>
                <Text color="#797979" style={{flexWrap: 'wrap', flex: 1}} small>
                  새로운 기기에서 본인인증 시 기존 기기에 설치된 COOV는
                  초기화됩니다.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Button
        title="확인"
        onPress={() => navigation.navigate(RootStack.PermissionGuide)}
      />
    </>
  );
};
