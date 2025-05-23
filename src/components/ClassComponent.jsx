import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Child from './Child';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {name: 'Abhijit'};
  }
  updateName = () => {
    this.setState({name: 'Abhijit Sinha'});
  };
  render() {
    const course = 'BIT';
    const rollno = 226600005;
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Name: {this.state.name}</Text>
        <Button title="Change Name" onPress={this.updateName} />
        <Child course={course} rollno={rollno} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  name: {
    fontSize: 30,
  },
});

export default ClassComponent;
