import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import { NOTIFICATION_TYPE } from '@Utilities/constants/data.constants';

const getNotificationHeaderColor = (notificationType) => {
    let backgroundColor;

    switch (notificationType) {
        case NOTIFICATION_TYPE.SUCCESS:
            backgroundColor = 'green';
            break;
        case NOTIFICATION_TYPE.ERROR:
            backgroundColor = 'red';
            break;
        case NOTIFICATION_TYPE.CONFIRMATION:
            backgroundColor = 'blue';
            break;
        default:
            backgroundColor = 'yellow';
            break;
    }

    return backgroundColor;
};

export default StyleSheet.create({
    bodyContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingVertical: heightPercentageToDP('4%'),
        width: '100%',
    },
    bodyText: {
        fontSize: widthPercentageToDP('4%'),
        color: 'black',
    },
    confirmationAction: {

    },
    footerContainer: {
        alignItems: 'center',
        borderBottomLeftRadius: widthPercentageToDP('5%'),
        borderBottomRightRadius: widthPercentageToDP('5%'),
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    headerContainer: (notificationType) => ({
        alignItems: 'center',
        backgroundColor: getNotificationHeaderColor(notificationType),
        borderTopLeftRadius: widthPercentageToDP('5%'),
        borderTopRightRadius: widthPercentageToDP('5%'),
        justifyContent: 'center',
        paddingVertical: heightPercentageToDP('1%'),
        width: '100%',
    }),
    headerText: {
        fontSize: widthPercentageToDP('5%'),
        color: 'white',
    },
    mainContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: widthPercentageToDP('5%'),
        flex: 1,
        position: 'absolute',
        width: widthPercentageToDP('80%'),
    },
    oneAction: {
        borderBottomLeftRadius: widthPercentageToDP('5%'),
        borderBottomRightRadius: widthPercentageToDP('5%'),
        borderRadius: 0,
        paddingHorizontal: widthPercentageToDP('10%'),
        paddingVertical: heightPercentageToDP('1%'),
        width: '100%',
    },
    leftAction: {
        borderBottomLeftRadius: widthPercentageToDP('5%'),
        borderRadius: 0,
        backgroundColor: 'white',
        paddingHorizontal: widthPercentageToDP('10%'),
        paddingVertical: heightPercentageToDP('1%'),
        width: '50%',
        borderTopWidth: 1,
        borderRightWidth: 1,
    },
    rightAction: {
        borderBottomRightRadius: widthPercentageToDP('5%'),
        borderRadius: 0,
        backgroundColor: 'white',
        paddingHorizontal: widthPercentageToDP('10%'),
        paddingVertical: heightPercentageToDP('1%'),
        width: '50%',
        borderTopWidth: 1,
    },
});
