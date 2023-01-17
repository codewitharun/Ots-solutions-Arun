import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = props => {
  // console.log(props);
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation
            ? props.navigation(props.Rout)
            : alert('Screen navigation not set');
        }}
        style={styles.TouchableView}>
        <Text style={styles.TextStyle}>{props.type}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  Container: {
    height: 40,
    width: 300,
    marginBottom: 50,
  },
  TouchableView: {
    backgroundColor: 'blue',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
