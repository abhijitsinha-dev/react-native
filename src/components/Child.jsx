import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

class Child extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Course: {this.props.course}</Text>
        <Text style={styles.text}>Rollno: {this.props.rollno}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default Child;
