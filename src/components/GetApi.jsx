import {View, Platform, StatusBar, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserCard from './UserCard';

const GetApi = () => {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.0.2.2:3000/students');
        const result = await response.json();

        setFetchData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#2d3436',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <FlatList
        data={fetchData}
        renderItem={std => <UserCard data={std.item} key={std.item.id} />}
        keyExtractor={std => std.id}
      />
    </View>
  );
};

export default GetApi;
