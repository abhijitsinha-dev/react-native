import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React from 'react';

const AlertMessage = () => {
  const deleteConfirm = () => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => console.log('Delete'),
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Text style={styles.buttonText} onPress={deleteConfirm}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlertMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8e44ad',
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
