import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log('Email: ', email);
    console.log('Password', password);
    setEmail('');
    setPassword('');
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={'#16a085'}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={'#16a085'}
        />
        <Text style={styles.forgot}>Forgot password?</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>
          Not a member?{' '}
          <Text style={styles.link} onPress={() => console.log('Signup Now')}>
            Signup Now
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginForm;

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1abc9c',
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    backgroundColor: '#16a085',
    width: '100%',
    textAlign: 'center',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  form: {
    backgroundColor: 'white',
    width: '100%',
    gap: 10,
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#bdc3c7',
    color: '#16a085',
    paddingLeft: 20,
    borderRadius: 20,
  },
  forgot: {
    color: '#1abc9c',
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    backgroundColor: '#1abc9c',
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    marginTop: 15,
  },
});
