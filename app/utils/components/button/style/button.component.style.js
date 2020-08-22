import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
    main: {
        alignItems: 'center',
        backgroundColor: 'rgb(11,0,111)',
        borderRadius: widthPercentageToDP('10%'),
        justifyContent: 'center',
        paddingHorizontal: widthPercentageToDP('15%'),
        paddingVertical: heightPercentageToDP('2%'),
    },
    text: {
        color: 'white',
        fontSize: widthPercentageToDP('4%'),
    },
    textContainer: {
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 1,
        paddingVertical: heightPercentageToDP('2%'),
    },
});