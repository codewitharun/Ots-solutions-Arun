// import {
//   View,
//   Text,
//   StyleSheet,
//   Modal,
//   Pressable,
//   Alert,
//   Switch,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';

// import DropDownPicker from 'react-native-dropdown-picker';

// const Practice = ({navigation}) => {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () =>
//     setIsEnabled(previousState => {
//       !previousState;
//     });
//   const [items, setItems] = useState([
//     {label: 'Apple', value: 'apple'},
//     {label: 'Banana', value: 'banana'},
//   ]);
//   return (
//     <View style={styles.container}>
//       {/* <View style={styles.centeredView}>
//         <WebView
//           // style={{width: '100%'}}
//           source={{uri: 'https://codewitharun.github.io/'}}
//         />
//       </View> */}
//       <View style={styles.centeredView}>
//         <DropDownPicker
//           open={open}
//           value={value}
//           items={items}
//           setOpen={setOpen}
//           setValue={setValue}
//           setItems={setItems}
//         />
//         <Switch
//           trackColor={{false: '#767577', true: '#81b0ff'}}
//           thumbColor={isEnabled ? '#f5db' : '#f4f3f4'}
//           ios_backgroundColor="#3e3e3e"
//           onValueChange={toggleSwitch}
//           value={isEnabled}
//         />
//         <Text>{value}</Text>

//         {isEnabled ? (
//           <View
//             style={{
//               backgroundColor: 'green',
//               height: 200,
//               width: '100%',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text>True</Text>
//           </View>
//         ) : (
//           <View
//             style={{
//               backgroundColor: 'red',
//               height: 200,
//               width: '100%',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text>false</Text>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// export default Practice;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: 'black',
//     paddingVertical: 20,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   circles: {
//     flexDirection: 'row',
//     backgroundColor: 'tomato',
//     alignItems: 'center',
//   },
//   progress: {
//     margin: 10,
//   },
//   centeredView: {
//     height: '100%',
//     width: '80%',
//     // backgroundColor: 'red',
//   },
// });

import React from 'react';
import {
  Button,
  Platform,
  Text,
  Vibration,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const Separator = () => {
  return <View style={Platform.OS === 'android' ? styles.separator : null} />;
};

const Practice = () => {
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const PATTERN_DESC =
    Platform.OS === 'android'
      ? 'wait 1s, vibrate 2s, wait 3s'
      : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, styles.paragraph]}>Vibration API</Text>
      <View>
        <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
      </View>
      <Separator />
      {Platform.OS === 'android'
        ? [
            <View>
              <Button
                title="Vibrate for 10 seconds"
                onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
              />
            </View>,
            <Separator />,
          ]
        : null}
      <Text style={styles.paragraph}>Pattern: {PATTERN_DESC}</Text>
      <Button
        title="Vibrate with pattern"
        onPress={() => Vibration.vibrate(PATTERN)}
      />
      <Separator />
      <Button
        title="Vibrate with pattern until cancelled"
        onPress={() => Vibration.vibrate(PATTERN, true)}
      />
      <Separator />
      <Button
        title="Stop vibration pattern"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 44,
    padding: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Practice;
