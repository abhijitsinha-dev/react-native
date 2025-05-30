import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageEx = () => {
  const [username, setUsername] = useState('');

  const storeUsername = async () => {
    if (!username) {
      Alert.alert(
        'Invaid Username!',
        'Please enter a valid username',
        [{text: 'OK'}],
        {cancelable: true},
      );
      return;
    }
    try {
      await AsyncStorage.setItem('username', username);
      setUsername('');
    } catch (error) {
      console.log(error);
    }
  };

  const getUsername = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      if (!storedUsername) {
        Alert.alert('Not Found!', 'Username is not stored', [{text: 'OK'}], {
          cancelable: true,
        });
        return;
      }
      setUsername(storedUsername);
    } catch (error) {
      console.log(error);
    }
  };

  const removeUsername = async () => {
    try {
      await AsyncStorage.removeItem('username');

      Alert.alert('Removed!', 'Username removed', [{text: 'OK'}], {
        cancelable: true,
      });
      setUsername('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="Username"
        placeholderTextColor={'white'}
        value={username}
        onChangeText={setUsername}
        cursorColor={'white'}
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.button} onPress={storeUsername}>
        <Text style={styles.buttonText}>Store Username</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={getUsername}>
        <Text style={styles.buttonText}>Retrive Username</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={removeUsername}>
        <Text style={styles.buttonText}>Remove Username</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AsyncStorageEx;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1abc9c',
  },
  textInput: {
    backgroundColor: '#16a085',
    color: 'white',
    paddingLeft: 20,
    borderRadius: 20,
    width: '60%',
  },
  button: {
    backgroundColor: '#fc5c65',
    borderRadius: 15,
    paddingVertical: 10,
    width: '60%',
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
