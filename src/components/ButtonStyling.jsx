// TouchableOpacity & TouchableHighlight & Buttom
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import React from 'react';
import styles from '../style/style';

const ButtonStyling = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Basic Button"
        color={'purple'}
        onPress={() => console.log('Basic Button')}
      />
      <TouchableOpacity
        style={styling.TouchableOpacity}
        activeOpacity={0.8}
        onPress={() => console.log('TouchableOpacity')}>
        <Text style={styling.TouchableOpacityText}>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styling.TouchableHighlight}
        onPress={() => console.log('TouchableHighlight')}
        underlayColor={'#27ae60'}>
        <Text style={styling.TouchableHighlightText}>TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  );
};

const styling = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: '#2c3e50',
    paddingVertical: 20,
    margin: 30,
    borderRadius: 20,
  },
  TouchableOpacityText: {
    textAlign: 'center',
    color: '#ecf0f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  TouchableHighlight: {
    backgroundColor: '#16a085',
    paddingVertical: 20,
    margin: 30,
    borderRadius: 20,
  },
  TouchableHighlightText: {
    textAlign: 'center',
    color: '#ecf0f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ButtonStyling;
