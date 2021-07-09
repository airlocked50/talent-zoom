/* eslint-disable no-unused-vars */
import axios from 'axios';
import { GLOBAL } from '../constants/Global';

export const loginTalent = ({ body = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'auth/loginTalent';
    axios
      .post(REQUEST_URL, body)
      .then(response => {
        resolve(response.data);
      })
      .catch(response => {
        resolve(null);
      });
  });
};

export const getTalents = token => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'talent/getTalents';
    axios
      .get(REQUEST_URL, {
        headers: {
          token: token,
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(() => {
        reject(null);
      });
  });
};

export const getTalentById = ({ _id = null, token = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'talent/getTalentById/' + _id;
    axios
      .get(REQUEST_URL, {
        headers: { token },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(() => {
        resolve(null);
      });
  });
};

export const createTalent = ({ body = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'talent/createTalent';
    axios
      .post(REQUEST_URL, body)
      .then(response => {
        resolve(response.data);
      })
      .catch(response => {
        resolve(null);
      });
  });
};

export const updateTalent = ({ body = null, _id = null, token = null }) => {
  
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'talent/updateTalent/' + _id;
    axios
      .put(REQUEST_URL, body, {
        headers: { token },
      })
      .then(response => {
        
        resolve(response.data);
      })
      .catch(response => {
        resolve(null);
      });
  });
};

export const verifyTalent = ({ verificationId = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'verify/talent/' + verificationId;
    axios
      .get(REQUEST_URL)
      .then(response => {
        resolve(response.data);
      })
      .catch(response => {
        resolve(null);
      });
  });
};

export const sendResetMail = ({ body = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'talent/sendResetPasswordMail';
    axios
      .post(REQUEST_URL, body)
      .then(response => {
        resolve(response.data);
      })
      .catch(response => {
       
        resolve(null);
      });
  });
};

export const changePassword = ({ body = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'talent/resetPasswordTalent';
    axios
      .put(REQUEST_URL, body)
      .then(response => {
        resolve(response.data);
      })
      .catch(response => {
        
        resolve(null);
      });
  });
};
