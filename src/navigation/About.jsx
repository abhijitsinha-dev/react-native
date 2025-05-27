import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const About = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.Heading}>About</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    color: '#8e44ad',
    fontSize: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: 'olive',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
