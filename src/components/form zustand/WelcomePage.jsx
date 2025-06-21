import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useUserStore} from '../../zustand/store';

const WelcomePage = () => {
  const {username} = useUserStore();

  return (
    <View className="flex-1 justify-center items-center bg-[#f0f8ff] p-[20px]">
      <Text className="text-[28px] text-[#333] mb-[10px]">Welcome,</Text>
      <Text className="text-[32px] font-bold text-[#0066cc] mb-[20px]">
        {username}!
      </Text>
      <Text className="text-[18px] text-[#555] italic">
        We're glad to see you again.
      </Text>
    </View>
  );
};

export default WelcomePage;
