import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = props => {
  const {navigation, route} = props;
  const {username} = route.params;
  console.log(username);

  return (
    <View>
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
