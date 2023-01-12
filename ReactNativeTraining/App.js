import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import TextBox from './src/Screens/Textbox';
import Touch from './src/Screens/Touch';
import Avatar from './src/Screens/Avatar';
const App = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'blue'} />

      <Avatar
        avatar={
          'https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png'
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
