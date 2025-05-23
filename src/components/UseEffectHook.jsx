import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect mounting & updating');
    return () => {
      console.log('useEffect unmounting');
    };
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>Count: {count}</Text>
      <Button title="inc count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default UseEffectHook;
