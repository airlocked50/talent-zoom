import * as types from '../types';

export function addUserData(data) {
  return {
    type: types.ADD_USER_DATA,
    payload: data,
  };
}
