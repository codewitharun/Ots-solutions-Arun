import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  BackHandler,
  Alert,
} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from './src/Redux/Store/Store';

import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Route from './src/Route';
import * as Screens from './src/Screens';
import {Routes} from './src/Route/Route';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomApi from './src/CustomComponents/CustomApi';
import messaging from '@react-native-firebase/messaging';
// const Drawer =
const Stack = createNativeStackNavigator();
const App = props => {
  // Register background handler
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />
        <Route />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    // backgroundColor: 'black',
  },
});
