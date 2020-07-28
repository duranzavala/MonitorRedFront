import { combineReducers } from 'redux';

import LoginReducer from '@Redux/reducers/login.reducer';

export const reducers = {
    LoginReducer,
};

export default combineReducers(reducers);
