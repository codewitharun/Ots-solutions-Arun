import {StatusBar, StyleSheet, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Avatar from '../../CustomComponents/Avatar';
import CustomButton from '../../CustomComponents/CustomButton';
import TextBox from '../../CustomComponents/TextBox';
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
      <View style={styles.imageView}>
        <Avatar
          avatar={
            'https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png'
          }
        />
      </View>

      <TextBox
        getBoxType={'email-address'}
        secure={false}
        placeHolderText={'Enter Your Email'}
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
      <CustomButton type={Routes.Signup} />
      <CustomButton
        type={Routes.Login}
        Rout={Routes.Login}
        navigation={navigation.navigate}
      />
      <Text>Signup using Signup Text</Text>
    </ImageBackground>
  );
};
export default Signup;
