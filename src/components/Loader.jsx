import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <View style={styles.mainContainer}>
      {showLoader && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={'#1abc9c'} />
          <Text style={styles.loaderText}>Loading....</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() => setShowLoader(!showLoader)}
        style={styles.button}
        activeOpacity={0.6}>
        <Text style={styles.buttonText}>
          {showLoader ? 'Hide Loader' : 'Show Loader'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    backgroundColor: '#ecf0f1',
    borderRadius: 20,
    padding: 20,
    shadowColor: 'black',
    elevation: 10,
  },
  loaderText: {
    color: '#1abc9c',
    fontWeight: '600',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#1abc9c',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#ecf0f1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
