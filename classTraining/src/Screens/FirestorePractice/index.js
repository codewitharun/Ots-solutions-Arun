import {
  StatusBar,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import Avatar from '../../CustomComponents/Avatar';
import CustomButton from '../../CustomComponents/CustomButton';
import TextBox from '../../CustomComponents/TextBox';
import {Routes} from '../../Route/Route';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {createSerializableStateInvariantMiddleware} from '@reduxjs/toolkit';
const SendDataToFirestore = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  function signupUser() {
    setLoading(true);
    setTimeout(() => {
      firestore()
        .collection('SendMessage')
        .doc('0SGlS14ggu0jV1WAXJWz')
        .update({
          name: 'updating the value of name',
        })
        .then(() => {
          console.log('User added!');
          Alert.alert('User Added!');
          // navigation.navigate('Drawer');
        })
        .then(() => {
          setUsername(''),
            setPassword(''),
            setConfirmPassword(''),
            setPhone(''),
            setName('');
        })

        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
      setLoading(false);
    }, 4000);
  }
  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: 'https://s-media-cache-ak0.pinimg.com/236x/c5/d2/39/c5d23931fbc079d5c7259b8e42e851dc.jpg',
      }}
      style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'blue'} />
      <View style={styles.imageView}>
        {/* <Avatar
          // dotRequire={true}
          avatar={
            'https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png'
          }
        /> */}
      </View>
      <TextBox
        value={name}
        onChangeText={t => setName(t)}
        getBoxType={'default'}
        secure={false}
        // getText={getText}
        placeHolderText={'Enter Your name'}
      />
      <TextBox
        value={username}
        onChangeText={t => setUsername(t)}
        getBoxType={'email-address'}
        secure={false}
        // getText={getText}
        placeHolderText={'Enter Your Email address'}
      />

      <TextBox
        value={phone}
        maxLength={10}
        onChangeText={t => setPhone(t)}
        getBoxType={'numeric'}
        secure={false}
        // getText={getText}
        placeHolderText={'Enter Your Phone Number'}
      />
      <TextBox
        value={password}
        maxLength={10}
        onChangeText={t => setPassword(t)}
        getBoxType={'default'}
        secure={true}
        // getText={getText}
        placeHolderText={'Enter Your Password'}
      />
      <TextBox
        maxLength={10}
        value={confirmPassword}
        onChangeText={t => setConfirmPassword(t)}
        getBoxType={'default'}
        secure={true}
        // getText={getText}
        placeHolderText={'Confirm Password'}
      />
      <CustomButton
        name={'Set data to Firestore'}
        loading={loading}
        handlePress={() => {
          signupUser();
        }}
      />

      {/* <Text>Signup using Signup Text</Text> */}
    </ImageBackground>
  );
};
export default SendDataToFirestore;
