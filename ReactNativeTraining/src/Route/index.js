import {StatusBar, StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screens from '../Screens/index';
import {Routes} from './Route';
const Stack = createNativeStackNavigator();
const Route = ({navigation}) => {
  //   console.log('Props in ROutes', navigation);
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={screens.Login} />
      <Stack.Screen name={Routes.Signup} component={screens.Signup} />
    </Stack.Navigator>
  );
};

export default Route;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    // backgroundColor: 'black',
  },
});
