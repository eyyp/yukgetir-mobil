import createReducer from '../../helper/createReducer'
import * as types from '../actions/types';

const initialState = {
  general:[],
  vehicleType:[],
  vehicleProperty:[],
  equipment:[],
};

export const filterReducer = createReducer(initialState, {
  [types.SET_FILTER](state,action) {
    return { 
        ...state,
        general:action.general,
        vehicleType:action.vehicleType,
        vehicleProperty:action.vehicleProperty,
        equipment:action.equipment,
    };
  },
});