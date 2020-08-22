import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
    actionsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingVertical: heightPercentageToDP('5%'),
    },
    inputsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: heightPercentageToDP('1%'),
    },
    inputsSpace: {
        height: heightPercentageToDP('5%'),
    },
    instructions: {
        color: 'red',
        fontSize: widthPercentageToDP('3%'),
    },
    instructionsContainer: {
        paddingStart: widthPercentageToDP('10%'),
        width: '100%',
    },
    mainContainer: {
        width: '100%',
        height: '100%',
    },
    registerContainer: {
        backgroundColor: 'rgb(11,0,111)',
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
        paddingVertical: heightPercentageToDP('6%'),
    },
});