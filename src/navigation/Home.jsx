import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = props => {
  const {navigation, route} = props;
  const {username} = route.params;
  console.log(username);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.Heading}>Hello {username}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

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
