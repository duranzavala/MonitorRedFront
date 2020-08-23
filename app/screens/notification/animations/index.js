import { Animated } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const ANIMATE_OPACITY = {
    inputRange: [0, 1],
    outputRange: [0, 1],
};

const ANIMATE_POSITION_Y = {
    inputRange: [0, 1],
    outputRange: [heightPercentageToDP('100%'), heightPercentageToDP('30%')],
};

const ANIMATION_SHOW_NOTIFICATION = (animateOpacity, animatePositionY) => [
    Animated.timing(animateOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
    Animated.timing(animatePositionY, { toValue: 1, duration: 500, useNativeDriver: true }),
];

const ANIMATION_HIDE_NOTIFICATION = (animateOpacity, animatePositionY) => [
    Animated.timing(animateOpacity, { toValue: 0, duration: 500, useNativeDriver: true }),
    Animated.timing(animatePositionY, { toValue: 0, duration: 500, useNativeDriver: true }),
];

export {
    ANIMATE_OPACITY,
    ANIMATE_POSITION_Y,
    ANIMATION_HIDE_NOTIFICATION,
    ANIMATION_SHOW_NOTIFICATION,
}