import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {LoginUser} from '../Redux/Actions/Actions';
import fromReducer from '../Redux/Reducers/Reducers';
const CustomButton = props => {
  // console.log(props);
  const dispatch = useDispatch();
  const {login} = useSelector(state => state.fromReducer);
  function handleClick() {
    // console.log(props.validate);
    if (props?.validate) {
      if (props?.validate?.username === 'Arun@gmail.com') {
        console.log('validation matches username');
        props.navigation(props.Rout);
      } else {
        Alert.alert('Pease enter Arunk4it@gmail.com to proceed to the app');
      }
    } else {
      console.log(
        'validation not found , performing rout operation please wait ',
      );

      props.navigation(props.Rout);
    }
  }
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={props.handlePress}
        style={styles.TouchableView}>
        {props.loading ? (
          <ActivityIndicator size={30} color={'red'} />
        ) : (
          <Text style={styles.TextStyle}>{props.name}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  Container: {
    height: 40,
    width: 300,
    marginBottom: 50,
  },
  TouchableView: {
    backgroundColor: 'blue',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
