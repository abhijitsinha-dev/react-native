import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const About = ({navigation}) => {
  return (
    <View>
      <Text style={styles.Heading}>About Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  Heading: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#16a085',
    borderRadius: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
