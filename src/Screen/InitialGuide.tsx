import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {RootStack} from '../Constants';

import {Button, Text, View} from '~/Components';

export default (): React.ReactElement => {
  const navigation = useNavigation();
  const items = ['📄', '📱', '✅'];

  return (
    <>
      <View style={{padding: 20}} fill>
        <View style={{justifyContent: 'center', alignItems: 'center'}} fill>
          <Text bold large>
            약관 동의와 본인인증을
          </Text>
          <Text bold large>
            완료한 후 증명서가 발급됩니다
          </Text>
          <View
            style={{
              justifyContent: 'space-around',
              width: '100%',
              marginTop: 80,
              // backgroundColor: 'red',
            }}
            row
          >
            {items.map(item => (
              <View
                key={item}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: '#F3F6FC',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text>{item}</Text>
              </View>
            ))}

            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View
                style={{
                  width: '50%',
                  borderTopColor: '#F3F6FC',
                  borderTopWidth: 2,
                  zIndex: -1,
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <Button
        title="다음"
        onPress={() => navigation.navigate(RootStack.TermsCheck)}
      />
    </>
  );
};
