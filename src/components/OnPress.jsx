import {View, Text, Button} from 'react-native';
import React from 'react';

const OnPress = () => {
  let name = 'Abhijit';
  const getName = () => {
    name = 'Sinha';
    console.log('Name: ', name);
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>{name}on OnPress</Text>
      <Button title="Press" onPress={getName} />
      {/* <Button title="Press" onPress={() => getName('Abhijit')} /> */}
    </View>
  );
};

export default OnPress;
