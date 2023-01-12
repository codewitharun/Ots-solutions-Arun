import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Touch = ({type}) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          alert('Welcome');
        }}
        style={styles.TouchableView}>
        <Text style={styles.TextStyle}>{type}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Touch;

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
