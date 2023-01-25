import {StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const TextBox = ({getBoxType, secure, placeHolderText, getData, getText}) => {
  const [text, setText] = useState('');
  useEffect(() => {
    getText({login: text});
  }, [text]);
  return (
    <View>
      <TextInput
        keyboardType={getBoxType}
        secureTextEntry={secure}
        style={styles.TextInputStyle}
        placeholder={placeHolderText}
        // onChangeText={txt => {
        onKeyPress={e => {
          );
        }}
        // }}
        // onSubmitEditing={event => {
        //   console.log(event.nativeEvent);
        // }}
        onEndEditing={event => {
          setText(event.nativeEvent.text);
        }}
      />
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  TextInputStyle: {
    height: 40,
    backgroundColor: 'white',
    width: 300,
    paddingLeft: 20,
    marginBottom: 30,
  },
});
