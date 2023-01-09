/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import axios, {isCancel, AxiosError} from 'axios';

const Products = ({navigation}) => {
  const [hello, setHello] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(function (response) {
        // handle success
        // console.log();
        setHello(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  const handleclick = selectedProduct => {
    navigation.navigate('Details', {
      product: selectedProduct,
    });
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
      }}>
      {/* {hello &&
          hello.map(e => {
            return (
              <View
                key={e.id}
                style={{
                  flex: 1,
                  // backgroundColor: 'black',
                  width: '90%',
                  borderColor: 'black',
                  borderWidth: 1,
                  padding: 20,
                  justifyContent: 'center',
                  // alignItems: 'center',
                  margin: 10,
                }}>
                <View
                  style={{
                    // alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{height: 200, width: 200, resizeMode: 'contain'}}
                    source={{
                      uri: e?.images[0],
                    }}
                  />
                  <View>
                    <TouchableOpacity onPress={() => handleclick(e)}>
                      <Text style={{fontSize: 24}}>{e.title}</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 19}}>Mrp:{e.price}</Text>
                  </View>
                </View>
              </View>
            );
          })} */}
      <FlatList
        data={hello}
        renderItem={item => {
          return (
            <View
              style={{
                flex: 1,
                flexWrap: 'wrap',
                alignSelf: 'center',
                borderWidth: 1,
                margin: 30,
                width: '90%',
              }}>
              {console.log(item.item)}
              <TouchableOpacity onPress={() => handleclick(item.item)}>
                <Image
                  source={{uri: item?.item?.images[0]}}
                  style={{
                    height: 200,
                    width: 200,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <Text>
                {item?.item?.title} <Text>{item?.item?.brand}</Text>
              </Text>
              <Text> {item?.item?.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
