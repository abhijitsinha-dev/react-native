import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import React, {useRef} from 'react';

const UseRefHook = () => {
  const emailRef = useRef();

  handlSubmit = () => {
    // emailRef.current.setNativeProps({
    //   text: 'abhijit@gmail.com',
    // });
    // emailRef.current.focus();
    emailRef.current.clear();
    Keyboard.dismiss();
  };
  return (
    <View style={styles.mainContainer}>
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor={'white'}
        keyboardType="email-address"
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={handlSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  textInput: {
    borderWidth: 0.3,
    borderColor: '#ecf0f1',
    backgroundColor: '#34495e',
    borderRadius: 30,
    paddingLeft: 20,
    width: '60%',
    color: 'white',
  },
  button: {
    paddingVertical: 10,
    backgroundColor: '#2d3436',
    width: '60%',
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});

export default UseRefHook;
