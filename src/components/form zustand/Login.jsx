import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useUserStore} from '../../zustand/store';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useUserStore();
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    setUser(username);

    navigation.reset({
      index: 0,
      routes: [{name: 'Welcome'}],
    });

    setUsername('');
    setPassword('');
  };

  return (
    <View className="flex-1 justify-center p-5">
      <Text className="text-[24px] font-bold mb-5 text-center">Login</Text>

      <TextInput
        className="h-[50px] border border-gray-300 rounded-[5px] px-4 mb-4 text-base"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        className="h-[50px] border border-gray-300 rounded-[5px] px-4 mb-4 text-base"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        className="bg-blue-600 py-4 px-6 rounded-[5px] items-center"
        onPress={handleLogin}>
        <Text className="text-white text-[18px] font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
