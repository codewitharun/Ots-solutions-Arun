import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',

    // backgroundColor: 'black',
  },
  locationView: {
    height: 100,
    width: '90%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  ButtonView: {
    backgroundColor: 'white',
    height: 50,
    width: '70%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  imageView: {
    height: 140,
    width: '70%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    // opacity: 0.3,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  locTextColor: {
    color: 'black',
  },
  ring: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'tomato',
    borderWidth: 10,
  },
});
