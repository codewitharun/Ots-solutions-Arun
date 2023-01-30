import {ImageBackground, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const Users = ({navigation}) => {
  const [usersInFire, setUsersInFire] = useState({});
  const [count, setCount] = useState(0);
  async function getUsers() {
    await firestore()
      .collection('SendMessage')
      .get()
      .then(querySnapshot => {
        let user = [];
        // console.log('Total users: ', querySnapshot.size);
        setCount(querySnapshot.size);
        querySnapshot.forEach(data => {
          // console.log(data);
          user.push(data.data());
          setUsersInFire(user);
        });
      });
  }
  useEffect(() => {
    getUsers();
    // const currentUserId = auth().currentUser.uid;
    // console.log('Current user: ', currentUserId);
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      blurRadius={20}
      resizeMode="cover"
      source={{
        uri: 'https://wallpapers.com/images/featured/58g8gv3r23zg29kw.jpg',
      }}>
      <View style={styles.flatListView}>
        <Text style={styles.textStyle}>
          Total number of entries in firestore : {count}
        </Text>
        <FlatList
          style={styles.flatListStyle}
          data={usersInFire}
          renderItem={({item}) => {
            return (
              <View style={styles.flatListContainer}>
                <Text style={styles.textStyle}>Name: {item?.name}</Text>
                <Text style={styles.textStyle}>Email: {item?.email}</Text>
                <Text style={styles.textStyle}>Phone: {item?.phone}</Text>
              </View>
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Users;
