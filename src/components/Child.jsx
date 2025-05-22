import {View, Text} from 'react-native';
import React from 'react';

const Child = ({count}) => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Child</Text>
      <Text style={{fontSize: 30}}>Count {count}</Text>
    </View>
  );
};

export default Child;
