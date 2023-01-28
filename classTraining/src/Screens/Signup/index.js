import {StatusBar, StyleSheet, ImageBackground, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import Avatar from '../../CustomComponents/Avatar';
import CustomButton from '../../CustomComponents/CustomButton';
import TextBox from '../../CustomComponents/TextBox';
import {Routes} from '../../Route/Route';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const Signup = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  function signupUser() {
    firestore()
      .collection('Users')
      .add({
        name: name,
        phone: phone,
        email: username,
      })
      .then(() => {
        console.log('User added!');
        auth()
          .createUserWithEmailAndPassword(username, password)
          .then(() => {
            navigation.navigate('Drawer');
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
      });
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
        placeHolderText={'Enter Your Email'}
      />

      <TextBox
        value={phone}
        onChangeText={t => setPhone(t)}
        getBoxType={'phone-pad'}
        secure={false}
        // getText={getText}
        placeHolderText={'Enter Your Phone Number'}
      />
      <TextBox
        value={password}
        onChangeText={t => setPassword(t)}
        getBoxType={'numeric'}
        secure={true}
        // getText={getText}
        placeHolderText={'Enter Your Password'}
      />
      <TextBox
        value={confirmPassword}
        onChangeText={t => setConfirmPassword(t)}
        getBoxType={'numeric'}
        secure={true}
        // getText={getText}
        placeHolderText={'Confirm Password'}
      />
      <CustomButton
        name={Routes.Signup}
        handlePress={() => {
          signupUser();
        }}
      />
      <CustomButton
        name={Routes.Login}
        handlePress={() => navigation.navigate(Routes.Login)}
      />
      {/* <Text>Signup using Signup Text</Text> */}
    </ImageBackground>
  );
};
export default Signup;
