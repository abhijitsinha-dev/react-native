import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/navigation/Home';
import About from './src/navigation/About';
import Contact from './src/navigation/Contact';

const Tab = createBottomTabNavigator();

const setTabIcon = (routeName, focused, color, size) => {
  let iconname;

  if (routeName === 'Home') {
    iconname = focused ? 'home' : 'home-outline';
  } else if (routeName === 'About') {
    iconname = focused ? 'information-circle' : 'information-circle-outline';
  } else if (routeName === 'Contact') {
    iconname = focused ? 'mail' : 'mail-outline';
  }

  return <Icon name={iconname} color={color} size={size} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerTitle: '',
          headerTransparent: true,
          tabBarInactiveBackgroundColor: '#1abc9c',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: '#16a085',
          tabBarActiveTintColor: 'white',
          sceneStyle: {backgroundColor: '#1abc9c'},
          tabBarIcon: ({focused, color, size}) =>
            setTabIcon(route.name, focused, color, size),
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
