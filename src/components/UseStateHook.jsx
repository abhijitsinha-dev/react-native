import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const UseStateHook = () => {
  const [name, setName] = useState('Abhijit');
  return (
    <View>
      <Text style={{fontSize: 30}}>UseStateHook</Text>
      <Text style={{fontSize: 30}}>Name: {name}</Text>
      <Button title="Change" onPress={() => setName('Sinha')} />
    </View>
  );
};

export default UseStateHook;
