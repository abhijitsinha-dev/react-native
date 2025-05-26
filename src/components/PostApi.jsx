import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const PostApi = () => {
  const [formData, setFormData] = useState({
    id: null,
    name: null,
    rollno: null,
    class: null,
    section: null,
    age: null,
  });

  const handleInput = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleSubmit = async () => {
    const response = await fetch('http://10.0.2.2:3000/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();

    setFormData({
      id: null,
      name: null,
      rollno: null,
      class: null,
      section: null,
      age: null,
    });

    Alert.alert('Success', 'Student Data Added', [
      {
        text: 'OK',
      },
    ]);
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="ID"
        placeholderTextColor={'#dff9fb'}
        style={styles.textInput}
        value={formData.id}
        onChangeText={value => handleInput('id', value)}
        keyboardType="number-pad"
      />
      <TextInput
        placeholder="Name"
        placeholderTextColor={'#dff9fb'}
        style={styles.textInput}
        value={formData.name}
        onChangeText={value => handleInput('name', value)}
      />
      <TextInput
        placeholder="Rollno"
        placeholderTextColor={'#dff9fb'}
        style={styles.textInput}
        value={formData.rollno}
        onChangeText={value => handleInput('rollno', value)}
      />
      <TextInput
        placeholder="Class"
        placeholderTextColor={'#dff9fb'}
        style={styles.textInput}
        value={formData.class}
        onChangeText={value => handleInput('class', value)}
      />
      <TextInput
        placeholder="Section"
        placeholderTextColor={'#dff9fb'}
        style={styles.textInput}
        value={formData.section}
        onChangeText={value => handleInput('section', value)}
      />
      <TextInput
        placeholder="Age"
        placeholderTextColor={'#dff9fb'}
        style={styles.textInput}
        value={formData.age}
        keyboardType="number-pad"
        onChangeText={value => handleInput('age', value)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        activeOpacity={0.5}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostApi;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30336b',
  },
  textInput: {
    borderColor: '#dff9fb',
    borderWidth: 0.5,
    width: '60%',
    marginBottom: 10,
    paddingLeft: 20,
    borderRadius: 20,
    color: '#dff9fb',
  },
  button: {
    backgroundColor: '#130f40',
    width: '60%',
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#dff9fb',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
