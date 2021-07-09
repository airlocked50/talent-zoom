import * as types from '../types';

const initialState = {
  userData: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_DATA:
      return { userData: action.payload };

    default:
      return state;
  }
};
