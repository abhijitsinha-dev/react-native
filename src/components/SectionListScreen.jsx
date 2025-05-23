import {View, Text, SectionList, StyleSheet} from 'react-native';
import React from 'react';

const listItems = [
  {
    title: 'Fruits',
    data: [
      {id: 0, name: 'Apple'},
      {id: 1, name: 'Mango'},
      {id: 2, name: 'Orange'},
    ],
  },
  {
    title: 'Vegetables',
    data: [
      {id: 3, name: 'Carrot'},
      {id: 4, name: 'Potato'},
      {id: 5, name: 'Tomato'},
    ],
  },
];

const SectionListScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
  const renderSectionHeader = ({section}) => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{section.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <SectionList
        sections={listItems}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        key={item => item.id}
      />
    </View>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    paddingTop: 15,
  },
  item: {
    backgroundColor: '#add8e6',
    paddingTop: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
  },
  header: {
    backgroundColor: '#90ee90',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
