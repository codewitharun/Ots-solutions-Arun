import {LOGIN_USER} from '../Type/Type';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const arr = [];

export const LoginUser = Data => ({
  type: LOGIN_USER,
  payload: Data,
});
