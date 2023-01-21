import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {Routes} from '../../Route/Route';
import {styles} from './styles';

const Splash = props => {
  //   console.log(props);
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Login');
    }, 3000);
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        }}
        style={styles.container}>
        <View style={styles.activityView}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Splash;
