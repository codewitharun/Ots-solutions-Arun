import {StatusBar, ImageBackground, TouchableOpacity, Text} from 'react-native';
import React, {useEffect} from 'react';
import CustomApi from '../../CustomComponents/CustomApi';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {apiCall} from '../../Common/callApi';
import GetLocation from 'react-native-get-location';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Dashboard = props => {
  // function getUsers(response) {
  // console.log('Data From custom Api:', props);
  // }
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      console.log(location);
    })
    .catch(error => {
      const {code, message} = error;
      console.warn(code, message);
    });
  useEffect(() => {
    const response = apiCall({
      method: 'get',
      url: 'https://reqres.in/api/users',
    });
    return console.log(response);
  }, []);
  async function launchGallary() {
    await launchImageLibrary()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  async function launchFrontCamera() {
    await launchCamera()
      .then(res => {
        console.log(res);
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
      <TouchableOpacity
        onPress={() => {
          launchGallary();
        }}>
        <Text>Open Gallary</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          launchFrontCamera();
        }}>
        <Text>Open Camera</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default Dashboard;
