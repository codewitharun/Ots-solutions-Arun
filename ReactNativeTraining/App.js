import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Products from './src/Screens/Products';

const App = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Products keyType={'number-pad'} />
      <Products keyType={'email-address'} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
