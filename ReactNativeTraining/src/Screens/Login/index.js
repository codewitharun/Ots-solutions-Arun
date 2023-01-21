import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TextBox from '../../CustomComponents/TextBox';
import CustomButton from '../../CustomComponents/CustomButton';
import Avatar from '../../CustomComponents/Avatar';
import {Routes} from '../../Route/Route';
import {styles} from './styles';
const Login = ({navigation}) => {
  useEffect(() => {
    // getUsers();
    // getUserByFetch();
  }, []);

  function getUsers(response) {
    response.map(users => {
      console.log('Data From custom Api:', users);
    });
  }
  async function getUserByFetch() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let resJson = await response.json();
      console.log(resJson.email);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: 'https://s-media-cache-ak0.pinimg.com/236x/c5/d2/39/c5d23931fbc079d5c7259b8e42e851dc.jpg',
      }}
      style={styles.container}>
      {/* <StatusBar barStyle={'light-content'} backgroundColor={'blue'} /> */}
      <Avatar
        avatar={
          'https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png'
        }
        dotRequire={true}
      />
      <TextBox
        getData={getUsers}
        getBoxType={'email-address'}
        secure={false}
        placeHolderText={'Enter Your Email'}
      />
      <TextBox
        getData={getUsers}
        getBoxType={'numeric'}
        secure={true}
        placeHolderText={'Enter Your Password'}
      />
      <CustomButton
        type={Routes.Login}
        navigation={navigation.replace}
        Rout={'Drawer'}
      />
      <CustomButton
        type={Routes.Signup}
        Rout={Routes.Signup}
        navigation={navigation.navigate}
      />
    </ImageBackground>
  );
};
export default Login;
