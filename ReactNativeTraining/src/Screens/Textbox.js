import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const TextBox = ({getBoxType, secure, placeHolderText}) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        keyboardType={getBoxType}
        secureTextEntry={secure}
        style={styles.TextInputStyle}
        placeholder={placeHolderText}
        onChangeText={txt => {
          setText(txt);
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
