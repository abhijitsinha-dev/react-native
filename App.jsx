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
import LoginForm from './src/components/LoginForm';
import ContactListScreen from './src/screens/Contact/ContactListScreen';
import Grid from './src/components/Grid';
import ClassComponent from './src/components/ClassComponent';
import UseEffectHook from './src/components/UseEffectHook';
import HideShowToggle from './src/components/HideShowToggle';
import ButtonStyling from './src/components/ButtonStyling';
import Loader from './src/components/Loader';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text>Abhijit</Text>
      <Button title="Press Here" />
      <First />
      <JSX />
      <OnPress />
      <UseStateHook />
      <Props />
      <InputText />
      <Styling />
      <FlatListScreen />
      <SectionListScreen />
      <LoginForm />
      <ContactListScreen />
      <Grid />
      <ClassComponent />
      <UseEffectHook />
      <HideShowToggle />
      <ButtonStyling /> */}
      <Loader />
    </View>
  );
};

export default App;
