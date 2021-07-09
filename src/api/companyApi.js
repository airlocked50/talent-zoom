/* eslint-disable no-unused-vars */
import axios from 'axios';
import { GLOBAL } from '../constants/Global';

export const loginCompany = ({ body = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'auth/loginEmployer';
    axios
      .post(REQUEST_URL, body)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        resolve(null);
      });
  });
};

export const getTalents = token => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = 'talent/getTalents';
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

export const getEmployerById = ({ _id = null, token = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'employer/getEmployerById/' + _id;
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

export const getMatchesById = ({ _id = null, token = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'match/getMatchesByEmployerId/' + _id;
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

export const getMatchesByTalentId = ({ _id = null, token = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'match/getMatchesByTalentId/' + _id;
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

export const createCompany = ({ body = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'employer/createEmployer';
    axios
      .post(REQUEST_URL, body)
      .then(response => {
        resolve(response);
      })
      .catch(res => {
        resolve(null);
      });
  });
};

export const updateCompany = ({ body = null, _id = null, token = null }) => {
  
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'employer/updateEmployer/' + _id;
    axios
      .put(REQUEST_URL, body, {
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

export const updateMatch = ({ body = null }) => {
  
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'match/updateMatch';
    axios
      .put(REQUEST_URL, body)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        resolve(err);
      });
  });
};

export const verifyCompany = ({ verificationId = null }) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = GLOBAL.BASE_URL + 'verify/employer/' + verificationId;
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
    let REQUEST_URL = GLOBAL.BASE_URL + 'employer/sendResetPasswordMail';
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
    let REQUEST_URL = GLOBAL.BASE_URL + 'employer/resetPasswordEmployer';
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
