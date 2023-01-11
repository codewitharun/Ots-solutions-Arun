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

const Touch = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 200,
        width: '100%',
        marginBottom: 50,
        justifyContent: 'space-around',
        // alignItems: 'center',
      }}>
      <TouchableHighlight>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableOpacity>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback>
        <Text>TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>
      <TouchableNativeFeedback>
        <Text>TouchableNativeFeedback</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Touch;

const styles = StyleSheet.create({});
