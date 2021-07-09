import * as types from '../types';

export function updateUserData(data) {
  return {
    type: types.UPDATE_USER_DATA,
    payload: data,
  };
}
