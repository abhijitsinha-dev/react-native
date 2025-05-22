import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import styles from '../style/style';

const Styling = () => {
  return (
    <View>
      <Text style={{fontSize: 30, backgroundColor: 'crimson', color: 'white'}}>
        Inline Styling
      </Text>
      <Text style={style.text}>Internal Styling</Text>
      <Text style={styles.text}>External Styling</Text>
    </View>
  );
};

export default Styling;

const style = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'green',
    fontSize: 30,
    marginVertical: 10,
    padding: 10,
    textAlign: 'center',
  },
});
