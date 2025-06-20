import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const WelcomePage = () => {
  const username = useSelector(state => state.username.value) || 'User';

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome,</Text>
      <Text style={styles.usernameText}>{username}!</Text>
      <Text style={styles.messageText}>We're glad to see you again.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Light blue background
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    color: '#333',
    marginBottom: 10,
  },
  usernameText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 20,
  },
  messageText: {
    fontSize: 18,
    color: '#555',
    fontStyle: 'italic',
  },
});

export default WelcomePage;
