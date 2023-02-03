import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Routes} from '../../Route/Route';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';
import Login from '../Login';
import {MyDrawer} from '../../Route';
import Ring from '../../CustomComponents/Ring';

const Splash = props => {
  //   console.log(props);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    // console.log(user.providerData);
    if (initializing)
      setTimeout(() => {
        setInitializing(false);
      }, 4000);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return (
      <SafeAreaView>
        <ImageBackground
          resizeMode="repeat"
          source={{
            uri: 'https://c4.wallpaperflare.com/wallpaper/551/801/266/map-world-map-wallpaper-preview.jpg',
          }}
          style={styles.container}>
          {/* <View style={styles.activityView}> */}
          <Ring delay={0} />
          <Ring delay={1000} />
          <Ring delay={2000} />
          <Ring delay={3000} />
          {/* </View> */}
        </ImageBackground>
      </SafeAreaView>
    );
  }

  if (!user) {
    return <Login navigation={props.navigation} />;
  }

  return <MyDrawer navigation={props.navigation} />;
};

export default Splash;
