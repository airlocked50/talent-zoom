import axios from 'axios';
import { GLOBAL } from '../../constants/Global';

export const getHeaderFromBase64 = data => {
  var head = data.split(';');
  var type = head[0].split(':');
  return {
    'Content-Type': type[1],
  };
};
export const base64ToBinary = data => {
  return dataURItoBlob(data);
};

export const dataURItoBlob = dataURI => {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURI.split(',')[1]);
  } else {
    byteString = decodeURI(dataURI.split(',')[1]);
  }
  // separate out the mime component
  var mimeString = dataURI
    .split(',')[0]
    .split(':')[1]
    .split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
};

export const getFormDataContent = async e => {
  let splittedArr = e.target.files[0].name.split('.');
  const extension = splittedArr[splittedArr.length - 1];
  let responseData;
  let body = {
    contentType: extension,
    fileName: splittedArr[0].trim() + '.' + extension,
  };
  await axios
    .put(GLOBAL.BASE_URL + 'talent/getSignedUploadUrl', body, {
      headers: {
        token: '161151808514230e399acdc9f25a5f7811876a9c6bff0ca3b1bf7',
      },
    })
    .then(response => {
      
      responseData = response.data;
    })
    .catch(err => {
      
    });

  return responseData;
};
