import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/navigation/Home';
import About from './src/navigation/About';
import Contact from './src/navigation/Contact';
import {Platform, StatusBar, Text, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#1abc9c',
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          },
          tabBarLabelStyle: {color: 'white'},
          tabBarIndicatorStyle: {backgroundColor: '#34495e'},
          sceneStyle: {backgroundColor: '#1abc9c'},
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
