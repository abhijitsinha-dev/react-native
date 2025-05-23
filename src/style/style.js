import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    color: 'aliceblue',
    backgroundColor: 'olive',
    fontSize: 30,
    marginVertical: 10,
    padding: 10,
    textAlign: 'center',
  },
});

export default styles;
