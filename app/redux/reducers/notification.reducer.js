import { handleActions } from 'redux-actions';

import NotificationActionTypes from '@Redux/action.types/notification.action.types';

const initialState = {
    notificationMessage: '',
    notificationType: '',
    onPress: () => {},
    onPressLeft: () => {},
    onPressRight: () => {},
    shouldShowNotification: false,
};

const notificationReducer = handleActions(
    {
        [NotificationActionTypes.SHOW_NOTIFICATION]: (state, { payload }) => ({
            ...state,
            notificationMessage: payload.notificationMessage,
            notificationType: payload.notificationType,
            onPress: payload.onPress,
            onPressLeft: payload.onPressLeft,
            onPressRight: payload.onPressRight,
            shouldShowNotification: true,
        }),
        [NotificationActionTypes.HIDE_NOTIFICATION]: (state, { payload }) => ({
            ...state,
            shouldShowNotification: false,
        }),
    },
    initialState,
);

export default notificationReducer;
