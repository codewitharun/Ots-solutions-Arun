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
    // console.log(user);
    if (initializing)
      setTimeout(() => {
        setInitializing(false);
      }, 4000);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing)
    return (
      <SafeAreaView>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
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

  if (!user) {
    return <Login navigation={props.navigation} />;
  }

  return <MyDrawer navigation={props.navigation} />;
};

export default Splash;
