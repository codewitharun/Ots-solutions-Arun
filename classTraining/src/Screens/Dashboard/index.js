import {
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomApi from '../../CustomComponents/CustomApi';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {apiCall} from '../../Common/callApi';
import GetLocation from 'react-native-get-location';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Avatar from '../../CustomComponents/Avatar';
import CustomButton from '../../CustomComponents/CustomButton';
const Dashboard = props => {
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState(null);
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      setLocation(location);
    })
    .catch(error => {
      const {code, message} = error;
      // console.warn(code, message);
    });

  async function openGallery() {
    await launchImageLibrary()
      .then(res => {
        // console.log('after gallery pic', res.assets);
        setImage(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  async function launchFrontCamera() {
    await launchCamera()
      .then(res => {
        // console.log(res);
        // console.log('after camera pick', res);
        setImage(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: 'https://s-media-cache-ak0.pinimg.com/236x/c5/d2/39/c5d23931fbc079d5c7259b8e42e851dc.jpg',
      }}
      style={styles.container}>
      {location && (
        <View style={styles.locationView}>
          <Text style={styles.locTextColor}>you are here</Text>
          <Text style={styles.locTextColor}>Lat:{location.latitude}</Text>
          <Text style={styles.locTextColor}>Long:{location.longitude}</Text>
        </View>
      )}
      {image && image?.assets && (
        <View style={styles.imageView}>
          <Avatar avatar={image.assets[0].uri} />
        </View>
      )}
      <CustomButton
        name={'Open Gallery'}
        handlePress={() => {
          openGallery();
        }}
      />

      <CustomButton
        name={'Open Camera'}
        handlePress={() => {
          launchFrontCamera();
        }}
      />
    </ImageBackground>
  );
};
export default Dashboard;
