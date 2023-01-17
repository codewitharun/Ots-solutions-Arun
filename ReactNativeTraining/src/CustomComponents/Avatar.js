/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Avatar = ({avatar}) => {
  return (
    <View>
      <View style={{marginBottom: 30}}>
        <Image
          resizeMode="cover"
          source={{
            uri: avatar,
          }}
          style={styles.ImageStyle}
        />
        <TouchableOpacity
          onPress={() => {
            alert('Choose image from gallary');
          }}
          style={{
            height: 30,
            width: 30,
            backgroundColor: 'red',
            position: 'absolute',
            bottom: 0,
            right: 0,
            borderRadius: 50,
            
          }}
        />
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  ImageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
