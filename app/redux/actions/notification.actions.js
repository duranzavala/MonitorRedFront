import { createAction } from 'redux-actions';
import NotificationActionTypes from '@Redux/action.types/notification.action.types';

const actionShowNotification = createAction(NotificationActionTypes.SHOW_NOTIFICATION);
const actionHideNotification = createAction(NotificationActionTypes.HIDE_NOTIFICATION);

export {
    actionHideNotification,
    actionShowNotification,
};
