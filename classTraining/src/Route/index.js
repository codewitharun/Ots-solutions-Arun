import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Alert,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screens from '../Screens/index';
import {Routes} from './Route';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomTab from '../CustomBottomTab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer = createDrawerNavigator();

export function MyDrawer(props) {
  return (
    <Drawer.Navigator screenOptions={{headerShown: true}}>
      <Drawer.Screen name="Main Screen" component={MyTabs} />
      <Drawer.Screen
        name={Routes.SetData}
        component={screens.SendDataToFirestore}
      />
    </Drawer.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs(props) {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={Routes.Dashboard}
        component={screens.Dashboard}
        options={{
          tabBarIcon: ({size, color}) => {
            return <Icon name="menu" size={size} color={color} />;
          },
          tabBarStyle: {backgroundColor: 'black'},
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15},
        }}
      />
      <Tab.Screen
        name={Routes.Users}
        component={screens.Users}
        options={{
          tabBarIcon: ({size, color}) => {
            return <Icon name="rocket" size={size} color={color} />;
          },
          tabBarStyle: {backgroundColor: 'black'},
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15},
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={screens.Profile}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="face-man-profile" size={size} color={color} />;
          },
          tabBarStyle: {backgroundColor: 'black'},
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15},
        }}
      />
      <Tab.Screen
        name={Routes.Practice}
        component={screens.Practice}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon name="face-man-profile" size={size} color={color} />;
          },
          tabBarStyle: {backgroundColor: 'black'},
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15},
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
const Route = ({navigation}) => {
  //   console.log('Props in ROutes', navigation);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={screens.Splash} />
      <Stack.Screen name={Routes.Login} component={screens.Login} />

      <Stack.Screen name={Routes.Signup} component={screens.Signup} />

      <Stack.Screen name={Routes.BottomTab} component={MyTabs} />
      <Stack.Screen name="Drawer" component={MyDrawer} />
    </Stack.Navigator>
    // <MyTabs />
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
