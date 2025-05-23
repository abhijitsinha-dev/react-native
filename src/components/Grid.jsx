import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';

const data = [
  {id: 0, item: 'item 0'},
  {id: 1, item: 'item 1'},
  {id: 2, item: 'item 2'},
  {id: 3, item: 'item 3'},
  {id: 4, item: 'item 4'},
  {id: 5, item: 'item 5'},
  {id: 6, item: 'item 6'},
  {id: 7, item: 'item 7'},
  {id: 8, item: 'item 8'},
  {id: 9, item: 'item 9'},
  {id: 10, item: 'item 10'},
  {id: 11, item: 'item 11'},
  {id: 12, item: 'item 12'},
  {id: 13, item: 'item 13'},
  {id: 14, item: 'item 14'},
  {id: 15, item: 'item 15'},
  {id: 16, item: 'item 16'},
  {id: 17, item: 'item 17'},
  {id: 18, item: 'item 18'},
  {id: 19, item: 'item 19'},
];

const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Students</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map(item => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemText}>{item.item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#95a5a6',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  heading: {
    fontSize: 30,
    color: '#ecf0f1',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#7f8c8d',
    margin: 10,
    width: '40%',
    padding: 20,
    borderRadius: 10,
  },
  itemText: {
    color: '#ecf0f1',
    textAlign: 'center',
    fontSize: 18,
  },
});
