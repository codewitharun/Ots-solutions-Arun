import {
  GET_LIKES,
  GET_USER,
  LOGOUT_USER,
  INCREMENT,
  COMMENT,
} from '../type/type';
import auth from '@react-native-firebase/auth';

import {Alert} from 'react-native';

const arr = [];

export const comments = (postId, dispatch, comments) => {
  const update = {
    comment: comments,
    userId: 'hjgkj',
    postId: postId,
  };
  // console.log(like);
  if (arr.includes(comments)) {
    try {
      arr.pop(comments);

      dispatch({
        type: COMMENT,
        payload: arr,
      });
      // console.log('dghjkfsdjkf', arr);
      Alert.alert('tried to set comment in ==>', postId);
      // firestore()
      //   .collection('Upload')
      //   .doc(postId)
      //   .update({comment: firestore.FieldValue.arrayRemove(update)});
    } catch (error) {
      // Add custom logic to handle errors
      console.log('Error while dislike', error);
    }
  } else {
    try {
      arr.push(comments);

      dispatch({
        type: COMMENT,
        payload: arr,
      });
      Alert.alert('tried to set comment in ==>', postId);
      // firestore()
      //   .collection('Upload')
      //   .doc(postId)
      //   .update({comment: firestore.FieldValue.arrayUnion(update)});
      // firestore().collection('Upload').doc(like).update({like: arr});
      // console.log('dghjkfsdjkf', arr);
    } catch (error) {
      // Add custom logic to handle errors
      console.log('Error while like', error);
    }
  }
};
