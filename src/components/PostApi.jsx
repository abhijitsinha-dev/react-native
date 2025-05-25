import {View, Text} from 'react-native';
import React, {useState} from 'react';

const PostApi = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    age: '',
    isStudent: '',
    hobbies: [],
  });

  const handleInput = (field, value) => {
    setFormData({...formData, [field]: value});
  };
  return (
    <View>
      <Text>PostApi</Text>
    </View>
  );
};

export default PostApi;
