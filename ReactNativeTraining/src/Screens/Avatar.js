import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Avatar = ({avatar}) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        source={{
          uri: avatar,
        }}
        style={{
          height: 200,
          width: 200,
          borderRadius: 100 / 2,
          marginBottom: 30,
        }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
