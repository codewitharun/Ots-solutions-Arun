import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Avatar = ({avatar}) => {
  return (
    <View>
      <Image
        resizeMode="cover"
        source={{
          uri: avatar,
        }}
        style={styles.ImageStyle}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  ImageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 30,
  },
});
