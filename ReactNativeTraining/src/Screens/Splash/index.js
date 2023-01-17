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

const Splash = props => {
  //   console.log(props);
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate(Routes.BottomTab);
    }, 3000);
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: 'https://s-media-cache-ak0.pinimg.com/236x/c5/d2/39/c5d23931fbc079d5c7259b8e42e851dc.jpg',
        }}
        style={styles.container}>
        <View
          style={{
            backgroundColor: 'white',
            height: 60,
            width: 100,
            justifyContent: 'center',
          }}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',

    // backgroundColor: 'black',
  },
});
