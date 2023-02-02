import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Alert,
  Switch,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

const Practice = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View style={styles.container}>
      {/* <View style={styles.centeredView}>
        <WebView
          // style={{width: '100%'}}
          source={{uri: 'https://codewitharun.github.io/'}}
        />
      </View> */}
      <View style={styles.centeredView}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          
        />
        <Text>{value}</Text>

        {value == 'apple' ? (
          <Text style={{color: 'green'}}>True</Text>
        ) : (
          <Text style={{color: 'red'}}>False</Text>
        )}
      </View>
    </View>
  );
};

export default Practice;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  circles: {
    flexDirection: 'row',
    backgroundColor: 'tomato',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
  centeredView: {
    height: '100%',
    width: '80%',
    // backgroundColor: 'red',
  },
});
