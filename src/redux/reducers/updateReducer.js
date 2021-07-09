import * as types from '../types';

const initialState = {
  updatedData: {},
};

export const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_DATA:
      return {
        ...state,
        updatedData: { ...state.updatedData, ...action.payload },
      };

    default:
      return state;
  }
};
