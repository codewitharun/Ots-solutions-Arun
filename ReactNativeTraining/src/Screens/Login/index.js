import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import TextBox from '../../CustomComponents/TextBox';
import CustomButton from '../../CustomComponents/CustomButton';
import Avatar from '../../CustomComponents/Avatar';
import {Routes} from '../../Route/Route';
const Login = ({navigation}) => {
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
      <CustomButton
        type={Routes.Login}
        navigation={navigation.navigate}
        Rout={Routes.Profile}
      />
      <CustomButton
        type={Routes.Signup}
        Rout={Routes.Signup}
        navigation={navigation.navigate}
      />
      <Text>Login Using this Text</Text>
    </ImageBackground>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    // backgroundColor: 'black',
  },
});
