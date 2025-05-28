import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Contact = ({navigation}) => {
  return (
    <View>
      <Text style={styles.Heading}>Contact Screen</Text>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  Heading: {
    color: 'white',
    fontSize: 20,
  },
});
