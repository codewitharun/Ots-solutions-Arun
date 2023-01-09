import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './src/Screens/products';
import Rating from './assests/rating/star-outline.svg';
function DetailsScreen(props) {
  const [items, setItems] = useState();
  useEffect(() => {
    setItems(props?.route?.params?.product);
    // console.log(props?.route?.params?.product);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          // backgroundColor: 'green',
          borderRadius: 10,
          borderWidth: 1,
          height: '52%',
          width: '70%',
        }}>
        <Image
          source={{uri: items?.images[0]}}
          style={{
            height: 200,
            width: 200,
            alignSelf: 'center',
            marginTop: 10,
            resizeMode: 'contain',
          }}
        />
        <Text style={{fontSize: 20, paddingLeft: 10}}>{items?.title}</Text>
        <Text style={{paddingLeft: 10}}>
          <Text style={{fontWeight: 'bold', paddingLeft: 10}}>Brand:</Text>
          {items?.brand}
        </Text>
        <Text style={{fontWeight: 'bold', paddingLeft: 10}}>
          Price after Discount:
          <Text style={{fontSize: 20, paddingLeft: 10}}> {items?.price}</Text>
        </Text>
        <Text style={{paddingLeft: 10}}>
          <Text style={{fontWeight: 'bold', color: 'red', paddingLeft: 10}}>
            Discount {items?.discountPercentage} %
          </Text>
        </Text>

        <Text style={{fontWeight: 'bold'}}>
          {items?.rating}

          <Text style={{paddingLeft: 10}}>
            <Rating width={20} height={20} color="orange" paddingLeft={50} />
            User ratings
          </Text>
        </Text>
        <Text style={{paddingLeft: 10}}>
          <Text style={{fontWeight: 'bold', paddingLeft: 10}}>
            Description:
          </Text>
          {items?.description}
        </Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Products} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
