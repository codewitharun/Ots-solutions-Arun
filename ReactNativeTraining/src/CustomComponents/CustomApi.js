import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Avatar from './Avatar';

const CustomApi = ({getData, method, url, postData}) => {
  //   console.log(postData);
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, []);
  async function getDataFromApi() {
    try {
      axios({
        method: method,
        url: url,

        data: {
          ...postData,
        },
      }).then(response => {
        getData(response.data), setData(response.data);
      });
    } catch (error) {
      console.log('Error While Fetching', error);
    }
  }
  return (
    <View style={styles.container}>
      {method == 'get' ? (
        <FlatList
          data={data.data}
          renderItem={({item}) => (
            <View style={styles.getView}>
              <Avatar avatar={item?.avatar} dotRequire={false} />

              <Text>
                Full Name : {item?.first_name + ' ' + item?.last_name}
              </Text>
              <Text>Email : {item?.email}</Text>
            </View>
          )}
        />
      ) : (
        <View style={styles.postView}>
          <Text>createdAt : {data?.createdAt}</Text>
          <Text>job : {data?.job}</Text>
          <Text>Full Name : {data?.name}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomApi;

const styles = StyleSheet.create({
  container: {height: '100%', width: '80%'},
  getView: {
    height: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postView: {
    height: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
