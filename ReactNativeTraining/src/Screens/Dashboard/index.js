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
  useEffect(() => {
    // const response = apiCall({
    //   method: 'get',
    //   url: 'https://reqres.in/api/users',
    // });
    // return console.log(response);
  }, []);
  async function openGallery() {
    await launchImageLibrary()
      .then(res => {
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
          <Text>you are here</Text>
          <Text>Lat:{location.latitude}</Text>
          <Text>Long:{location.longitude}</Text>
        </View>
      )}
      {image && (
        <View style={styles.imageView}>
          <Avatar avatar={image.assets[0].uri} />
        </View>
      )}
      <TouchableOpacity
        style={styles.ButtonView}
        onPress={() => {
          openGallery();
        }}>
        <Text style={styles.textStyle}>Open Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ButtonView}
        onPress={() => {
          launchFrontCamera();
        }}>
        <Text style={styles.textStyle}>Open Camera</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default Dashboard;
