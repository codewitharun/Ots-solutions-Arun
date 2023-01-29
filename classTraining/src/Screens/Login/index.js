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
import auth from '@react-native-firebase/auth';
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    checkPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  // console.log('Username:', username);
  // console.log('Password:', password);
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

  function handleClick() {
    // console.log(props.validate);
    if (username && username === 'Arun@gmail.com') {
      console.log('validation matches username');
      navigation.navigate('Drawer');
    } else if (username !== 'Arun@gmail.com') {
      Alert.alert('Pease enter Arunk4it@gmail.com to proceed to the app');
    } else {
      console.log(
        'validation not found , performing rout operation please wait ',
      );

      navigation.navigate('Drawer');
    }
  }
  function loginUser() {
    setLoading(true);
    if (username === '' || password === '') {
      Alert.alert('Please enter username & password');
      setLoading(false);
    } else {
      setTimeout(() => {
        auth()
          .signInWithEmailAndPassword(username, password)
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
        setLoading(false);
      }, 3000);
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
      <View style={styles.imageView}>
        <Avatar
          avatar={
            'https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png'
          }
          dotRequire={true}
        />
      </View>
      <TextBox
        value={username}
        onChangeText={t => setUsername(t)}
        getBoxType={'email-address'}
        secure={false}
        // getText={getText}
        placeHolderText={'Enter Your Email'}
      />
      <TextBox
        value={password}
        onChangeText={t => setPassword(t)}
        getBoxType={'numeric'}
        secure={true}
        // getText={getText}
        placeHolderText={'Enter Your Password'}
      />
      <CustomButton
        loading={loading}
        name={Routes.Login}
        handlePress={loginUser}
      />
      <CustomButton
        name={Routes.Signup}
        handlePress={() => navigation.navigate(Routes.Signup)}
      />
    </ImageBackground>
  );
};
export default Login;
