import {Platform, StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: '#9b59b6',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  list: {
    backgroundColor: '#34495e',
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#2c3e50',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    color: 'white',
  },
  email: {
    fontSize: 16,
    color: 'white',
  },
});

export {styles};
