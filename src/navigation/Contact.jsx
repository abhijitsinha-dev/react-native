import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Contact = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.Heading}>Contact</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contact;

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
