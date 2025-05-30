import {View, Text} from 'react-native';
import React from 'react';
import AsyncStorageEx from './src/components/AsyncStorageEx';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AsyncStorageEx />
    </View>
  );
};

export default App;
