import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Products from './src/Screens/products';

import TextBox from './src/Screens/Textbox';
import Touch from './src/Screens/Touch';
import Avatar from './src/Screens/Avatar';
const App = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}></StatusBar>

      <Avatar
        avatar={
          'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'
        }
      />

      <TextBox
        getBoxType={'email-address'}
        secure={false}
        placeHolderText={'Enter Your Email'}
      />
      <TextBox
        getBoxType={'numeric'}
        secure={true}
        placeHolderText={'Enter Your Password'}
      />
      <Touch type={'Login'} />
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
