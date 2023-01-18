import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Route from './src/Route';
import * as Screens from './src/Screens';
import {Routes} from './src/Route/Route';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomApi from './src/CustomComponents/CustomApi';
// const Drawer =
const Stack = createNativeStackNavigator();
const App = props => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <Route />
    </NavigationContainer>
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
