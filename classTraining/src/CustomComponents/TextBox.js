import {StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const TextBox = props => {
  return (
    <View>
      <TextInput
        maxLength={props.maxLength}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.getBoxType}
        secureTextEntry={props.secure}
        style={styles.TextInputStyle}
        placeholder={props.placeHolderText}
        placeholderTextColor={'gray'}
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
    color: 'black',
  },
});
