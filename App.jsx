import {View, Text, Button} from 'react-native';
import React from 'react';
import First from './src/components/First';
import JSX from './src/components/JSX';
import OnPress from './src/components/OnPress';
import UseStateHook from './src/components/UseStateHook';
import Props from './src/components/Props';
import InputText from './src/components/InputText';
import Styling from './src/components/Styling';
import FlatListScreen from './src/components/FlatListScreen';
import SectionListScreen from './src/components/SectionListScreen';

const App = () => {
  return (
    <View>
      {/* <Text>Abhijit</Text>
      <Button title="Press Here" />
      <First />
      <JSX />
      <OnPress />
      <UseStateHook />
      <Props />
      <InputText />
      <Styling />
      <FlatListScreen /> */}
      <SectionListScreen />
    </View>
  );
};

export default App;
