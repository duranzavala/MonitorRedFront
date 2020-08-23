import { handleActions } from 'redux-actions';

import LoginActionTypes from '@Redux/action.types/login.action.types';

const initialState = {
    username: '',
    password: '',
    token: '',
};

const loginReducer = handleActions(
    {
        [LoginActionTypes.SAVE_DATA]: (state, { payload }) => ({
            ...state,
            username: payload.username,
            password: payload.password,
            token: payload.token,
        }),
    },
    initialState,
);

export default loginReducer;
