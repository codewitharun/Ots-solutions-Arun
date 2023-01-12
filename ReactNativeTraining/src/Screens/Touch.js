import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';

const Touch = ({type}) => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        height: 50,
        width: '80%',
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity>
        <Text style={{fontWeight: 'bold', color: 'white'}}>{type}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Touch;

const styles = StyleSheet.create({});
