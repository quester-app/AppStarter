import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {Image} from 'react-native';

import GreenShieldImage from '~/Assets/Images/green-shield.png';
import {VerticalLogo} from '~/Assets/Svg';
import {Text, View} from '~/Components';

export default (): React.ReactElement => {
  return (
    <>
      <View style={{padding: 35}} fill>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOpacity: 0.25,
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowRadius: 25,
            elevation: 10,
          }}
          fill
        >
          <View
            style={{
              backgroundColor: '#2C77FD',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingHorizontal: 30,
              paddingVertical: 15,
            }}
            fill
          >
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
              }}
            />
            <View
              style={{
                position: 'absolute',
                right: 35,
                top: 35,
              }}
            >
              <Image
                source={GreenShieldImage}
                style={{resizeMode: 'contain', width: 30, height: 30}}
              />
            </View>
            <View fill />
            <View
              style={{
                position: 'absolute',
                top: 50,
                left: 0,
              }}
            >
              <VerticalLogo />
            </View>
            <Text color="white" bold>
              COVID-19 lgM/lgG
            </Text>
            <Text color="white" bold>
              항체 테스트 결과 인증서
            </Text>
          </View>
          <View style={{paddingHorizontal: 30, paddingVertical: 15}}>
            <Text large>
              <Text bold large>
                홍길동
              </Text>
              님은{' '}
              <Text bold large>
                97.8%
              </Text>{' '}
              확률로
            </Text>
            <Text large>코로나 19 항체를 보유함</Text>
            <View style={{marginTop: 20}}>
              <Text xxSmall>
                <Text bold small>
                  김미경
                </Text>{' '}
                원장
              </Text>
              <Text xxSmall>강남연세소아과의원</Text>
              <Text xxSmall>서울특별시 강남구 역삼로 755</Text>
              <Text style={{marginTop: 15}} xSmall>
                발급일자 2021.07.10
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* <Button
        title="공유하기"
        onPress={() => navigation.navigate(RootStack.Page2)}
      /> */}
    </>
  );
};
