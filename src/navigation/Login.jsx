import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    if (!username) {
      Alert.alert('Invalid Input', 'Enter your name to proceed', [
        {text: 'OK'},
      ]);
    }

    navigation.navigate('Home', {username});
  };
  return (
    <View>
      <TextInput
        placeholder="Enter Your Name"
        placeholderTextColor={'white'}
        value={username}
        onChangeText={setUsername}
        style={styles.textInput}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#16a085',
    borderRadius: 20,
    width: 250,
    color: 'white',
    marginBottom: 20,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: '#16a085',
    borderRadius: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
