import {
  View,
  Platform,
  StatusBar,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserCard from './UserCard';

const GetApi = () => {
  const [fetchData, setFetchData] = useState([]);
  const [name, setName] = useState('');
  const fetchDataApi = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/students');
      const result = await response.json();

      setFetchData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const searchStd = () => {
    const filteredData = fetchData.filter(std =>
      std.name.toLowerCase().includes(name.toLocaleLowerCase()),
    );
    setFetchData(filteredData);
  };

  useEffect(() => {
    if (name) {
      searchStd();
      return;
    }
    fetchDataApi();
  }, [name]);

  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={'white'}
        style={styles.searchBar}
        value={name}
        onChangeText={value => setName(value)}
      />
      <FlatList
        data={fetchData}
        renderItem={std => <UserCard data={std.item} key={std.item.id} />}
        keyExtractor={std => std.id}
      />
    </View>
  );
};

export default GetApi;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2d3436',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchBar: {
    width: '80%',
    backgroundColor: '#2c3e50',
    marginHorizontal: 'auto',
    marginBottom: 20,
    borderRadius: 20,
    paddingLeft: 20,
    color: 'white',
  },
});
