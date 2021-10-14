import React, {ReactElement, useContext, useState} from 'react';

import {Button, View} from '~/Components';

export default (): ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const {signIn} = useContext(AuthContext);

  return (
    <View>
      {/* <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Sign in" onPress={() => signIn({username, password})} /> */}
    </View>
  );
};
