import React, { Component } from 'react';
import { Animated, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { hideNotification } from '@Redux/services/notification.service';

import {
    ANIMATE_OPACITY,
    ANIMATE_POSITION_Y,
    ANIMATION_HIDE_NOTIFICATION,
    ANIMATION_SHOW_NOTIFICATION,
} from '@Screens/notification/animations/index';
import ButtonComponent from '@Utilities/components/button/component/button.component';
import { NOTIFICATION_TYPE } from '@Utilities/constants/data.constants';
import Props from '@Screens/notification/props/notification.props';
import Style from '@Screens/notification/styles/notification.styles';

class NotificationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldShowNotification: this.props.shouldShowNotification,
        };

        this.animatePositionY = new Animated.Value(0);
        this.animateOpacity = new Animated.Value(0);
    }

    componentDidUpdate(oldProps) {
        const { shouldShowNotification: oldShouldShowNotification } = oldProps;
        const { shouldShowNotification } = this.props;

        if (oldShouldShowNotification !== shouldShowNotification) {
            this.handleNotification(oldShouldShowNotification, shouldShowNotification);
        }
    }

    handleNotification = (oldShouldShowNotification, shouldShowNotification) => {
        if (!oldShouldShowNotification && shouldShowNotification) {
            this.setState({ shouldShowNotification: true }, this.showNotification);
        } else {
            this.hideNotification(() => this.setState({ shouldShowNotification: false }));
        }
    };

    showNotification = () => Animated.parallel(ANIMATION_SHOW_NOTIFICATION(this.animateOpacity, this.animatePositionY)).start();

    hideNotification = (callback = () => {}) => Animated.parallel(ANIMATION_HIDE_NOTIFICATION(this.animateOpacity, this.animatePositionY)).start(() => {
        callback();
    });

    renderHeader = () => {
        const { notificationType } = this.props;

        return (
            <View style={Style.headerContainer(notificationType)}>
                <Text style={Style.headerText}>{notificationType}</Text>
            </View>
        );
    };

    renderBody = () => (
        <View style={Style.bodyContainer}>
            <Text style={Style.bodyText}>{this.props.notificationMessage}</Text>
        </View>
    );

    handleOnPressLeftAction = () => {
        this.props.onPressLeft();
        this.props.actionHideNotification();
    };
    
    handleOnPressRightAction = () => {
        this.props.onPressRight();
        this.props.actionHideNotification();
    };
    
    renderConfirmationAction = () => <>
        <ButtonComponent
            text={'No'}
            containerStyle={Style.leftAction}
            onPress={this.handleOnPressLeftAction}
            />
        <ButtonComponent
            text={'Yes'}
            containerStyle={Style.rightAction}
            onPress={this.handleOnPressRightAction}
            />
    </>;

    handleOnPressAction = () => {
        this.props.onPress();
        this.props.actionHideNotification();
    };

    renderNotificationAction = () => (
        <ButtonComponent
            text={'Ok'}
            containerStyle={Style.oneAction}
            onPress={this.handleOnPressAction}
        />
    );

    renderFooter = () => (
        <View style={Style.footerContainer}>
            { this.props.notificationType === NOTIFICATION_TYPE.CONFIRMATION
                ? this.renderConfirmationAction()
                : this.renderNotificationAction()
            }
        </View>
    );
    
    render() {
        return (
            this.state.shouldShowNotification && (
                <Animated.View style={[Style.mainContainer, {
                    opacity: this.animateOpacity.interpolate(ANIMATE_OPACITY),
                    transform: [{ translateY: this.animatePositionY.interpolate(ANIMATE_POSITION_Y) }]
                }]}
                >
                    { this.renderHeader() }
                    { this.renderBody() }
                    { this.renderFooter() }
                </Animated.View>
            )
        )
    }
}

NotificationContainer.defaultProps = Props.defaultProps;

NotificationContainer.propTypes = Props.propTypes;

const mapStateToProps = ({ NotificationReducer }) => {
    const {
        notificationMessage,
        notificationType,
        shouldShowNotification,
        onPress,
        onPressLeft,
        onPressRight
    } = NotificationReducer;
    
    return {
        notificationMessage,
        notificationType,
        shouldShowNotification,
        onPress,
        onPressLeft,
        onPressRight
    };
};

const mapDispatchToProps = () => (dispatch) => ({
    actionHideNotification: () => dispatch(hideNotification()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
)(NotificationContainer);
