import { combineReducers } from 'redux';

import LoginReducer from '@Redux/reducers/login.reducer';
import NotificationReducer from '@Redux/reducers/notification.reducer';

export const reducers = {
    LoginReducer,
    NotificationReducer,
};

export default combineReducers(reducers);
