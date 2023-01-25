import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TextBox from '../../CustomComponents/TextBox';
import CustomButton from '../../CustomComponents/CustomButton';
import Avatar from '../../CustomComponents/Avatar';
import {Routes} from '../../Route/Route';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {LoginUser} from '../../Redux/Actions/Actions';
import messaging from '@react-native-firebase/messaging';

const Login = ({navigation}) => {
  useEffect(() => {
    checkPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const checkPermission = async () => {
    if (Platform.OS === 'android') {
      getToken();
    } else {
      const enabled = await messaging().hasPermission();
      // If Premission granted proceed towards token fetch
      if (enabled == 1) {
        getToken();
      } else {
        // If permission hasn’t been granted to our app, request user in requestPermission method.
        requestPermission();
      }
    }
  };

  const requestPermission = async () => {
    try {
      await messaging().requestPermission();
      // User has authorised
      getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  };

  const getToken = async () => {
    let fcmToken = await messaging().getToken();
    console.log('Token:: ', fcmToken);
  };

  const dispatch = useDispatch();
  function getText(text) {
    console.log(text);
  }
  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: 'https://s-media-cache-ak0.pinimg.com/236x/c5/d2/39/c5d23931fbc079d5c7259b8e42e851dc.jpg',
      }}
      style={styles.container}>
      {/* <StatusBar barStyle={'light-content'} backgroundColor={'blue'} /> */}
      <View style={styles.imageView}>
        <Avatar
          avatar={
            'https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png'
          }
          dotRequire={true}
        />
      </View>
      <TextBox
        getBoxType={'email-address'}
        secure={false}
        getText={getText}
        
        placeHolderText={'Enter Your Email'}
      />
      <TextBox
        getBoxType={'numeric'}
        secure={true}
        getText={getText}
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
