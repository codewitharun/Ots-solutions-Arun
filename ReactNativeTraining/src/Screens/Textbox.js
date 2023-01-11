import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const TextBox = ({getBoxType}) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          backgroundColor: 'white',
          width: 300,
          paddingLeft: 20,
        }}
        placeholder="enter keyboard type here"
        onChangeText={txt => {
          setText(txt);
        }}
      />
      <Button title="click me" onPress={() => getBoxType(text)} />
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({});
