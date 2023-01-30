import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    height: height * 1,
    width: width * 1,
    // backgroundColor: 'black',
  },
  flatListView: {
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.5);',
    marginBottom: 15,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 10,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  flatListContainer: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    marginBottom: 10,
    padding: 20,
    // height: '50%',
  },
  flatListStyle: {
    width: '90%',
  },
});
