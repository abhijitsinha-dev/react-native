import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/navigation/Home';
import About from './src/navigation/About';
import Contact from './src/navigation/Contact';
import Login from './src/navigation/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: '',
          headerTintColor: 'white',
          headerTransparent: true,
          contentStyle: {
            flex: 1,
            backgroundColor: '#1abc9c',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen name="About" component={About} />

        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
