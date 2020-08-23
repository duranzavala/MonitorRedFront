import {
    actionHideNotification,
    actionShowNotification,
} from '@Redux/actions/notification.actions';

const showNotification = (
    notificationMessage,
    notificationType,
    onPress = () => {},
    onPressLeft = () => {},
    onPressRight = () => {},
) => (dispatch) => {
    dispatch(actionShowNotification({
        notificationMessage,
        notificationType,
        onPress,
        onPressLeft,
        onPressRight,
    }));
};

const hideNotification = () => (dispatch) => {
    dispatch(actionHideNotification());
};

export {
    hideNotification,
    showNotification,
};