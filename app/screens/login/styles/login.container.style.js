import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
    actionsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: heightPercentageToDP('8%'),
        width: '100%',
    },
    forgotPassword: {
        alignItems: 'center',
        paddingTop: heightPercentageToDP('3%'),
    },
    forgotPasswordText: {
        color: 'rgb(11,0,111)',
        fontSize: widthPercentageToDP('4%'),
    },
    imageContainer: {
        paddingHorizontal: widthPercentageToDP('15%'),
        paddingVertical: heightPercentageToDP('3%'),
        width: '100%',
    },
    inputsContainer: {
        alignItems: 'center',
        paddingVertical: heightPercentageToDP('3%'),
    },
    inputsSpace: {
        height: heightPercentageToDP('1%'),
    },
    loginContainer: {
        backgroundColor: 'rgb(11,0,111)',
    },
    mainContainer: {
        height: '100%',
        justifyContent: 'space-between',
        width: '100%',
    },
    registerContainer: {
        backgroundColor: 'rgb(108,0,108)',
    },
    rememberSession: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: heightPercentageToDP('5%'),
    },
    rememberSessionText: {
        color: 'gray',
        fontSize: widthPercentageToDP('4%'),
        marginEnd: widthPercentageToDP('2%'),
    },
    scrollView: {
        width: '100%',
    },
    title: {
        color: 'gray',
        fontSize: widthPercentageToDP('7%'),
        fontWeight: 'bold',
    },
    titleContainer: {
        alignItems: 'center',
        paddingVertical: heightPercentageToDP('2%'),
    },
});