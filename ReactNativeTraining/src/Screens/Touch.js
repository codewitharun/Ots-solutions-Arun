import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';

const Touch = ({type}) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          alert('Welcome');
        }}
        style={styles.TouchableView}>
        <Text style={styles.TextStle}>{type}</Text>
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
  TextStle: {fontWeight: 'bold', color: 'white'},
});
