import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
        // data: {
        //   ...postData,
        // },
      }).then(response => {
        getData(response.data), setData(response.data);
      });
    } catch (error) {
      console.log('Error While Fetching', error);
    }
  }
  return (
    <View style={{backgroundColor: 'white', height: 400, width: '100%'}}>
      {method == 'get' ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                height: 100,
                borderWidth: 1,
                borderRadius: 6,
                marginBottom: 10,
              }}>
              {console.log(item)}
              <Text>Email : {item?.email}</Text>
              <Text>username : {item?.username}</Text>
              <Text>Full Name : {item?.name}</Text>
            </View>
          )}
        />
      ) : (
        <View
          style={{
            height: 100,
            borderWidth: 1,
            borderRadius: 6,
            marginBottom: 10,
          }}>
          <Text>createdAt : {data?.createdAt}</Text>
          <Text>job : {data?.job}</Text>
          <Text>Full Name : {data?.name}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomApi;

const styles = StyleSheet.create({});
