import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const InputText = () => {
  const [username, setUsername] = useState('');

  return (
    <View>
      <Text style={{fontSize: 30}}>InputText</Text>
      <Text style={{fontSize: 30}}>Username: {username}</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderWidth: 2,
          borderColor: 'green',
          marginHorizontal: 40,
          marginVertical: 30,
        }}
        placeholder="Enter your username"
        onChangeText={value => setUsername(value)}
        value={username}
      />
      <Button title="Clear" onPress={() => setUsername('')} />
    </View>
  );
};

export default InputText;
