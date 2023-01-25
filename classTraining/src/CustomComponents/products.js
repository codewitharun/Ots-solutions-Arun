/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import React from 'react';

const Products = ({navigation, keyType}) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.textStyle}>KeyboardType: {keyType}</Text>
        <TextInput
          style={styles.textBox}
          keyboardType={keyType}
          placeholder={keyType}
          placeholderTextColor="white"
          keyboardAppearance="light"
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  textBox: {
    borderWidth: 1,
    borderColor: 'red',
    width: '100%',
    paddingLeft: 30,
    height: 60,
    borderRadius: 7,
    color: 'white',
  },
  textStyle: {lineHeight: 50, fontWeight: 'bold', fontSize: 20, color: 'white'},
});
