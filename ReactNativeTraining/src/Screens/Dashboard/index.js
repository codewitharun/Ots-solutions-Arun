import {StatusBar, ImageBackground} from 'react-native';
import React from 'react';
import CustomApi from '../../CustomComponents/CustomApi';

import {styles} from './styles';

const Dashboard = ({navigation}) => {
  function getUsers(response) {
    // console.log('Data From custom Api:', response);
  }

  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: 'https://s-media-cache-ak0.pinimg.com/236x/c5/d2/39/c5d23931fbc079d5c7259b8e42e851dc.jpg',
      }}
      style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'blue'} />
      <CustomApi
        method="get"
        url="https://reqres.in/api/users"
        getData={getUsers}
        // postData={{
        //   name: 'morpheus',
        //   job: 'leader',
        // }}
      />
    </ImageBackground>
  );
};
export default Dashboard;
