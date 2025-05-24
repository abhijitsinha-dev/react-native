import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React from 'react';

const StatusbarComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'purple'}
        translucent={false}
        hidden
      />
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        StatusBar
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1abc9c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StatusbarComponent;
