import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput placeholder="Password" secureTextEntry />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Home', {username})}
      />
    </View>
  );
};

export default Login;
