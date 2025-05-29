import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Contact = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.Heading}>Contact Screen</Text>
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
    color: 'white',
    fontSize: 20,
  },
});
