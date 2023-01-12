import {StatusBar, StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';

import TextBox from './src/Screens/Textbox';
import Touch from './src/Screens/Touch';
import Avatar from './src/Screens/Avatar';
const App = ({navigation}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: 'https://s-media-cache-ak0.pinimg.com/236x/c5/d2/39/c5d23931fbc079d5c7259b8e42e851dc.jpg',
      }}
      style={styles.container}>
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
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    // backgroundColor: 'black',
  },
});
