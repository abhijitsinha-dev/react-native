import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';

const PressableButton = () => {
  return (
    <View style={styles.mainContainer}>
      <Pressable
        style={styles.button}
        onPress={() => console.log('On Press')}
        onPressIn={() => console.log('Press In')}
        onLongPress={() => console.log('Long Press')}
        onPressOut={() => console.log('Press Out')}
        delayLongPress={1000}>
        <Text style={styles.buttonText}>Pressable</Text>
      </Pressable>
    </View>
  );
};

export default PressableButton;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#ecf0f1',
    fontSize: 18,
    fontWeight: '600',
  },
});
