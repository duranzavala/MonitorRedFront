import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
    inputContainer: {
        color: 'black',
        flex: 1,
        fontSize: widthPercentageToDP('4%'),
        width: '100%',
    },
    inputText: {
        color: 'gray',
        fontSize: widthPercentageToDP('4%'),
    },
    inputTextContainer: {
        width: '30%',
    },
    mainContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingEnd: widthPercentageToDP('10%'),
        paddingStart: widthPercentageToDP('10%'),
        paddingVertical: heightPercentageToDP('1%'),
        width: '100%',
    },
});
