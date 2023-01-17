import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import CustomButton from '../../CustomComponents/CustomButton';

import {Routes} from '../../Route/Route';
const Dashboard = ({navigation}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: 'https://s-media-cache-ak0.pinimg.com/236x/c5/d2/39/c5d23931fbc079d5c7259b8e42e851dc.jpg',
      }}
      style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'blue'} />

      <CustomButton
        type={'Pop back Example'}
        // Rout={Routes.Profile}
        navigation={navigation.pop}
      />
      <CustomButton
        type={'Go back Example'}
        // Rout={Routes.Signup}
        navigation={navigation.goBack}
      />
    </ImageBackground>
  );
};
export default Dashboard;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    // backgroundColor: 'black',
  },
});
