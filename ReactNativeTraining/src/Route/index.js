import {StatusBar, StyleSheet, View, ImageBackground, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screens from '../Screens/index';
import {Routes} from './Route';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={screens.Login} />
      <Drawer.Screen name="Article" component={screens.Signup} />
    </Drawer.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs(props) {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => {
        <View style={{backgroundColor: 'red', height: 40, width: '100%'}}>
          <Text>Hello ji</Text>
        </View>;
      }}>
      <Tab.Screen name={Routes.Login} component={screens.Login} />

      <Tab.Screen name={Routes.Signup} component={screens.Signup} />
      <Tab.Screen
        name={Routes.Profile}
        component={screens.Profile}
        options={{headerShown: true}}
      />
      <Tab.Screen name={Routes.Dashboard} component={screens.Dashboard} />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
const Route = ({navigation}) => {
  //   console.log('Props in ROutes', navigation);
  return (
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    //   <Stack.Screen name="BottomTab" component={MyTabs} />
    // </Stack.Navigator>
    <MyTabs />
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
