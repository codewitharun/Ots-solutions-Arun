import {
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  View,
  ActivityIndicator,
  Alert,
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
import Animated from 'react-native-reanimated';
import Ring from '../../CustomComponents/Ring';

const Dashboard = props => {
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  async function GetPosition() {
    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setLocation(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.log(code, message);
        if (code == 'UNAUTHORIZED') {
          Alert.alert(
            code,
            'Please Check Location Permission in device setting',
            message,
          );
        }
      });
  }
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
  useEffect(() => {
    GetPosition();
  }, []);

  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: 'https://wallpapers.com/images/featured/58g8gv3r23zg29kw.jpg',
      }}
      blurRadius={4}
      style={styles.container}>
      {location ? (
        <View style={styles.locationView}>
          <Text style={styles.locTextColor}>you are here</Text>
          <Text style={styles.locTextColor}>Lat:{location.latitude}</Text>
          <Text style={styles.locTextColor}>Long:{location.longitude}</Text>
        </View>
      ) : (
        <View style={styles.locationView}>
          <Ring delay={0} />
          <Ring delay={1000} />
          <Ring delay={2000} />
          <Ring delay={3000} />

          <CustomButton
            loading={loading}
            name={'Reload location'}
            handlePress={() => {
              GetPosition();
            }}
          />
        </View>
      )}
      {image && image?.assets ? (
        <View style={styles.imageView}>
          <Avatar avatar={image.assets[0].uri} />
        </View>
      ) : (
        <View style={styles.imageView}>
          <Avatar
            avatar={
              'https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg'
            }
          />
        </View>
      )}
      {loading ? (
        <View style={styles.imageView}>
          <ActivityIndicator size={40} color={'red'} />
        </View>
      ) : null}
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
