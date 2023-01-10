/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import React from 'react';

const Products = ({navigation, keyType}) => {
  return (
    <SafeAreaView>
      <View style={{}}>
        <Text style={{lineHeight: 50}}>KeyboardType: {keyType}</Text>
        <TextInput
          style={{
            borderWidth: 1,
            width: '90%',
            paddingLeft: 30,
            height: 60,
            borderRadius: 7,
          }}
          keyboardType={keyType}
          placeholder={keyType}
          keyboardAppearance="dark"
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({});
