import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const UserCard = ({data}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{data?.name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>Rollno: {data?.rollno}</Text>
        <Text style={styles.textContent}>Class: {data?.class}</Text>
        <Text style={styles.textContent}>Section: {data.section}</Text>
        <Text style={styles.textContent}>Age: {data.age}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '70%',
    marginHorizontal: 'auto',
  },
  nameContainer: {
    backgroundColor: '#222f3e',
    paddingVertical: 10,
    width: '100%',
  },
  nameText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  textContent: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 16,
  },
  textContainer: {
    paddingVertical: 10,
  },
});
