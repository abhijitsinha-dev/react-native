import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import Login from './src/components/form zustand/Login';
import WelcomePage from './src/components/form zustand/WelcomePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerTransparent: true, title: ''}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Welcome" component={WelcomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
