import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import reactNative from '../images/react-native.png';
import nodejs from '../images/nodejs.png';

const AnimatedCard = () => {
  const flip = useSharedValue(0);

  const animatedStyleFront = useAnimatedStyle(() => {
    return {
      transform: [{perspective: 1000}, {rotateY: `${flip.value}deg`}],
      opacity: flip.value < 90 ? 1 : 0,
    };
  });

  const animatedStyleBack = useAnimatedStyle(() => {
    return {
      transform: [{perspective: 1000}, {rotateY: `${flip.value + 180}deg`}],
      opacity: flip.value > 90 ? 1 : 0,
    };
  });

  const handleFlip = () => {
    flip.value = withSpring(flip.value === 0 ? 180 : 0);
  };
  return (
    <View className="flex-1 justify-center items-center bg-[#f0f4f8]">
      <View className="w-64 h-64 ">
        <Animated.View
          style={animatedStyleFront}
          className={
            'w-full h-full  bg-white rounded-3xl shadow-xl justify-center items-center'
          }>
          <Image
            source={reactNative}
            resizeMode="contain"
            className="w-56 h-36 rounded-lg"
          />
        </Animated.View>
        <Animated.View
          style={animatedStyleBack}
          className={
            'w-full h-full absolute bg-white rounded-3xl shadow-xl justify-center items-center'
          }>
          <Image
            source={nodejs}
            resizeMode="contain"
            className="w-56 h-36 rounded-lg"
          />
        </Animated.View>
      </View>
      <TouchableOpacity
        onPress={handleFlip}
        className="mt-8 px-8 py-3 bg-[#4a90e3] rounded-lg shadow-md">
        <Text className="text-white text-lg font-semibold">FLIP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedCard;
