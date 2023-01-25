import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const CustomTab = ({navigation}) => {
  const Tab = createBottomTabNavigator;
  return (
    <View style={styles.container}>
      <Text>Custom tab</Text>
    </View>
  );
};

export default CustomTab;
