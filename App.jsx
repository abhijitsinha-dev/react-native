import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/navigation/Home';
import About from './src/navigation/About';
import Contact from './src/navigation/Contact';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTitle: '',
          headerTintColor: 'white',
          headerTransparent: true,
          drawerStyle: {
            backgroundColor: '#16a085',
          },
          drawerLabelStyle: {
            color: 'white',
            textAlign: 'center',
          },
          drawerActiveTintColor: 'black',
          drawerPosition: 'right',
          sceneStyle: {
            backgroundColor: '#1abc9c',
          },
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
