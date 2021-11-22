import {LinearGradient} from 'expo-linear-gradient';
import React, {useState} from 'react';
import {Platform} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {Sad, Smile, Soso} from '~/Assets/Svg';
import {Text, View} from '~/Components';

const FaceStyle = {
  good: {
    marginTop: Platform.OS === 'android' ? -40 : -25,
    mouse: Platform.OS === 'android' ? '⌣' : '⏝',
    color: '#2C77FD',
    rgbColor: '44,119,253',
    asset: Smile,
  },
  soso: {
    marginTop: -25,
    mouse: 'ㅡ',
    color: '#FFB82E',
    rgbColor: '255,184,46',
    asset: Soso,
  },
  bad: {
    marginTop: Platform.OS === 'android' ? -15 : -10,
    mouse: Platform.OS === 'android' ? '⌢' : '⏜',
    color: '#FF553D',
    rgbColor: '255,85,61',
    asset: Sad,
  },
};

export default (): React.ReactElement => {
  const [state] = useState('good' as 'good' | 'soso' | 'bad');
  const face = FaceStyle[state];

  return (
    <>
      <View style={{padding: 20}}>
        <Text bold large>
          안녕하세요 홍길동님 :)
        </Text>
        <Text bold large>
          오늘의 컨디션은 어떠세요?
        </Text>
      </View>
      {/* <View>
        <Text>⚫️⚬·-</Text>
        <Text>∙•・●⁃-</Text>
        <Text>⏝⏜⌣</Text>
        <Text>⎺⎻⎼⎽ ⎯</Text>
      </View> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        fill
      >
        <AnimatedCircularProgress
          fill={90}
          lineCap="round"
          prefill={90}
          rotation={0}
          size={200}
          tintColor={face.color}
          width={6}
        >
          {() => (
            <View
              style={{
                width: 140,
                height: 140,
                borderRadius: 70,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(#b,0.5)',
              }}
            >
              <LinearGradient
                colors={[
                  `rgba(${face.rgbColor},0.25)`,
                  `rgba(${face.rgbColor},0)`,
                ]}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: -1,
                  borderRadius: 70,
                }}
              />
              <View
                style={{
                  backgroundColor: face.color,
                  borderRadius: 50,
                  width: 100,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 9,
                }}
              >
                <face.asset />
              </View>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
      {/* <Button
        title="코로나 19 확진자 현황"
        onPress={() => navigation.navigate(RootStack.Page2)}
      /> */}
    </>
  );
};
