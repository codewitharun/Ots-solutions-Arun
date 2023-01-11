import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Products from './src/Screens/Products';

import TextBox from './src/Screens/Textbox';
const App = ({navigation}) => {
  const [textFromBox, setTextFromBox] = useState('default');
  const text = txt => {
    setTextFromBox(txt);
  };
  useEffect(() => {
    text();
  }, []);

  return (
    <View style={styles.container}>
      <TextBox getBoxType={text} />
      <Products keyType={textFromBox} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
});
