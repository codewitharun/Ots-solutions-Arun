import {ImageBackground, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const Users = ({navigation}) => {
  const [usersInFire, setUsersInFire] = useState({});
  const [count, setCount] = useState(0);
  async function getUsers() {
    const usersFromFirestore = await firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        let user = [];
        console.log('Total users: ', querySnapshot.size);
        setCount(querySnapshot.size);
        querySnapshot.forEach(data => {
          user.push(data.data());
          setUsersInFire(user);
          // console.log(data.data());
          // console.log(users);
        });

        // querySnapshot.forEach(documentSnapshot => {
        //   console.log(
        //     'User ID: ',
        //     documentSnapshot.id,
        //     documentSnapshot.data(),
        //   );
        // });
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
      resizeMode="cover"
      source={{
        uri: 'https://s-media-cache-ak0.pinimg.com/236x/c5/d2/39/c5d23931fbc079d5c7259b8e42e851dc.jpg',
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
