import axios from 'axios';
export const apiCall = ({method, url}) => {
  //   console.log(method, url);
  try {
    axios({
      method: method,
      url: url,

      //   data: {
      //     ...postData,
      //   },
    }).then(response => {
      return response;
    });
  } catch (error) {
    console.log(error);
  }
};
