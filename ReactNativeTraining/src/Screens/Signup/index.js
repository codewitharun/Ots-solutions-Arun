import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import TextBox from '../Textbox';
import Touch from '../Touch';
import Avatar from '../Avatar';
import {Routes} from '../../Route/Route';
const Signup = ({navigation}) => {
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
      <Touch type={Routes.Signup} />
      <Touch type={Routes.Login} Rout={Routes.Login} navigation={navigation} />
    </ImageBackground>
  );
};
export default Signup;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    // backgroundColor: 'black',
  },
});
