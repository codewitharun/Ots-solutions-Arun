import {
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {apiCall} from '../../Common/callApi';
import CustomButton from '../../CustomComponents/CustomButton';
import Avatar from '../../CustomComponents/Avatar';
import {Routes} from '../../Route/Route';
import {styles} from './styles';
import firestore from '@react-native-firebase/firestore';
import TextBox from '../../CustomComponents/TextBox';
import {FlatList} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
const Profile = ({navigation}) => {
  const [user, setUser] = useState([]);
  const [otherUsers, setOtherUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [count, setCount] = useState('');
  useEffect(() => {
    getData();
  }, []);

  const toggleModal = item => {
    setModalVisible(!isModalVisible);
    if (!isModalVisible) {
      console.log(item);
      setModalItem(item);
    } else {
      console.log('modal is visibility is false');
    }
  };

  async function getData() {
    const usersfrom = await firestore()
      .collection('Users')
      // .doc(auth().currentUser.uid)
      .get()
      .then(querySnapshot => {
        let otherUsers = [];
        let currentUser = [];

        // console.log('Total users: ', querySnapshot.size);
        setCount(querySnapshot.size);
        querySnapshot.forEach(data => {
          if (data.id.match(auth().currentUser.uid)) {
            // console.log('User: ', data.data(), data.id);
            currentUser.push(data.data());
            setUser(currentUser);
          } else {
            // console.log(data.data());
            otherUsers.push(data.data());
            setOtherUsers(otherUsers);
          }
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
      })
      .catch(err => console.log('error while getting data', err));
  }

  async function signOutFunc() {
    setLoading(true);
    setTimeout(() => {
      auth()
        .signOut()
        .then(() => {
          console.log('User signed out!');
          navigation.navigate('Splash');
        });
      setLoading(false);
    }, 3000);
  }
  return (
    <ImageBackground
      resizeMode="cover"
      blurRadius={7}
      source={{
        uri: 'https://images.pexels.com/photos/716398/pexels-photo-716398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}
      style={styles.container}>
      {/* <StatusBar barStyle={'light-content'} backgroundColor={'blue'} /> */}
      <View style={styles.flatListView}>
        <Text style={styles.textStyle}>Current Login user </Text>
        <View style={styles.currentUserView} key={auth().currentUser.uid}>
          <Text style={styles.textStyle1}>ID: {auth().currentUser.uid}</Text>
          <Text style={styles.textStyle1}>
            Name: {auth().currentUser.displayName}
          </Text>
          <Text style={styles.textStyle1}>
            Phone: {auth().currentUser.phoneNumber}
          </Text>
          <Text style={styles.textStyle1}>
            Email: {auth().currentUser.email}
          </Text>
          <Text style={styles.textStyle1}>
            Provider: {auth().currentUser.providerData.toString()}
          </Text>
        </View>

        <Text style={styles.textStyle}>other users in firestore</Text>
        <FlatList
          style={styles.flatListStyle}
          data={otherUsers}
          renderItem={({item}) => {
            return (
              <View style={styles.flatListContainer}>
                <TouchableOpacity onPress={() => toggleModal(item)}>
                  <Text style={styles.textStyle}>Name: {item?.name}</Text>
                </TouchableOpacity>
                {/* <Text style={styles.textStyle}>Phone: {item?.phone}</Text>
                <Text style={styles.textStyle}>Email: {item?.email}</Text> */}
              </View>
            );
          }}
        />
        <Modal
          isVisible={isModalVisible}
          hasBackdrop={true}
          animationIn={'jello'}
          animationOut={'jello'}>
          <ImageBackground
            resizeMode="cover"
            source={{
              uri: 'https://th.bing.com/th/id/R.b83a3d579fe3dff7855d178291220ff5?rik=%2fOnspRj2Pysjsg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2ff%2fb%2fb%2f432445.jpg&ehk=MujUgNkK%2bTlIIdoGkAKuvuP6agLhBlMgawwfr3Q7gYE%3d&risl=&pid=ImgRaw&r=0',
            }}
            style={styles.modalView}>
            <Text style={styles.modalText}>
              <Text>Name : </Text>
              {modalItem?.name}
            </Text>
            <Text style={styles.modalText}>
              <Text>Email : </Text>
              {modalItem?.email}
            </Text>
            <Text style={styles.modalText}>
              <Text>Phone : </Text>
              {modalItem?.phone}
            </Text>
            <CustomButton name="Close Modal" handlePress={toggleModal} />
          </ImageBackground>
        </Modal>
      </View>
      <CustomButton
        name={'Sign Out'}
        loading={loading}
        handlePress={() => {
          signOutFunc();
        }}
      />
    </ImageBackground>
  );
};
export default Profile;
