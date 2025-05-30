import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import React from 'react';
import backgroundImg from '../images/backgroundImg.jpg';
import {reactImg} from '../images/image';

const ImageComponent = () => {
  return (
    <ImageBackground
      source={backgroundImg}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.content}>
        <Image source={{uri: reactImg}} resizeMode="cover" style={styles.img} />
      </View>
    </ImageBackground>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '50%',
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0, 0.1)',
    borderRadius: '50%',
  },
  img: {
    flex: 1,
  },
});
