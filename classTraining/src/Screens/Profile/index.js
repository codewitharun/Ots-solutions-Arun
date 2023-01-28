import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {apiCall} from '../../Common/callApi';
import CustomButton from '../../CustomComponents/CustomButton';
import Avatar from '../../CustomComponents/Avatar';
import {Routes} from '../../Route/Route';
import {styles} from './styles';
import firestore from '@react-native-firebase/firestore';
import TextBox from '../../CustomComponents/TextBox';
const Profile = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(data => {
          console.log(data.data());
        });
        // querySnapshot.forEach(documentSnapshot => {
        //   console.log(
        //     'User ID: ',
        //     documentSnapshot.id,
        //     documentSnapshot.data(),
        //   );
        // });
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

      <TextBox
        value={name}
        onChangeText={t => setName(t)}
        getBoxType={'default'}
        secure={false}
        // getText={getText}
        placeHolderText={'Enter Your Name'}
      />
      <TextBox
        value={email}
        onChangeText={t => setEmail(t)}
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

      <CustomButton name={'Store to Firestore'} handlePress={() => setData()} />
      <CustomButton
        name={'Sign Out'}
        handlePress={() => {
          auth()
            .signOut()
            .then(() => {
              console.log('User signed out!');
              navigation.navigate('Splash');
            });
        }}
      />
    </ImageBackground>
  );
};
export default Profile;
