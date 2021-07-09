import * as types from '../types';

const initialState = {
  stepData: {},
};

export const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER_DATA:
      return { ...state, stepData: { ...state.stepData, ...action.payload } };

    default:
      return state;
  }
};
