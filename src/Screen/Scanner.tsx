import {useNavigation} from '@react-navigation/native';
import {
  BarCodeScanner,
  BarCodeScannerResult,
  PermissionStatus,
} from 'expo-barcode-scanner';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {Button, Text, View} from '~/Components';

export default (): React.ReactElement => {
  const navitation = useNavigation();
  const [hasPermission, setHasPermission] = useState<Boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [type, setIsType] = useState<typeof BarCodeScanner.Constants.Type>(
    BarCodeScanner.Constants.Type.back,
  );

  useEffect(() => {
    (async () => {
      try {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === PermissionStatus.GRANTED);
      } catch (e) {
        console.log(e);
        // throw e;
      }
    })();
  }, []);

  const handleBarCodeScanned = ({type, data}: BarCodeScannerResult) => {
    setScanned(true);
    Alert.alert(
      `Bar code with type ${type} and data ${data} has been scanned!`,
    );
  };

  if (hasPermission === null) {
    // return <Text>Requesting for camera permission</Text>;
    return <></>;
  }
  if (hasPermission === false) {
    // return <Text>No access to camera</Text>;
    return <></>;
  }

  return (
    <>
      <BarCodeScanner
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={{flex: 1, position: 'relative', zIndex: 1}}
        type={type}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        {/* <Text>Scanner on</Text> */}
      </BarCodeScanner>
      {scanned && (
        <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
      )}
    </>
  );
};
