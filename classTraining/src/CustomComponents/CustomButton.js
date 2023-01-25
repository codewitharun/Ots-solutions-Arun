import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {LoginUser} from '../Redux/Actions/Actions';
import fromReducer from '../Redux/Reducers/Reducers';
const CustomButton = props => {
  // console.log(props);
  const dispatch = useDispatch();
  const {login} = useSelector(state => state.fromReducer);
  console.log(login.user);
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation(props.Rout);
          dispatch(LoginUser({user: 'Arun'}));
        }}
        style={styles.TouchableView}>
        <Text style={styles.TextStyle}>{props.type}</Text>
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
