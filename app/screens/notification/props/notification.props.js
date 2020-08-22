import PropTypes from 'prop-types';
import { NOTIFICATION_TYPE } from '@Utilities/constants/data.constants';

const defaultProps = {
    notificationMessage: '',
    shouldShowNotification: false,
    notificationType: NOTIFICATION_TYPE.CONFIRMATION,
    onPress: () => { },
    onPressLeft: () => { },
    onPressRight: () => { },
};

const propTypes = {
    notificationMessage: PropTypes.string,
    notificationType: PropTypes.string,
    onPress: PropTypes.func,
    onPressLeft: PropTypes.func,
    onPressRight: PropTypes.func,
    shouldShowNotification: PropTypes.bool,
};


export default {
    defaultProps,
    propTypes,
};
