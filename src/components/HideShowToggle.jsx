import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import HideShow from './HideShow';
import styles from '../style/style';

const HideShowToggle = () => {
  const [status, setStatus] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>HideShowToggle</Text>
      {status && <HideShow />}
      <Button title="Toggle" onPress={() => setStatus(!status)} />
    </View>
  );
};

export default HideShowToggle;
