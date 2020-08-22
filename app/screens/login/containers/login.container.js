import React, { Component } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    Switch,
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { Images } from '@Assets';
import ButtonComponent from '@Utilities/components/button/component/button.component';
import InputComponent from '@Utilities/components/input/component/input.component';
import Style from '@Screens/login/styles/login.container.style';
import LoginController from '@Controllers/login.controller';
import { showNotification } from '@Redux/services/notification.service';
import { NOTIFICATION_TYPE } from '@Utilities/constants/data.constants';

class LoginContainer extends Component {
    state = {
        email: 'duranzavala@gmail.co',
        password: 'planb04300',
        rememberSession: false,
    };

    renderTitle = () => (
        <View style={Style.titleContainer}>
            <Text style={Style.title}>Network Administration</Text>
        </View>
    );

    renderImage = () => (
        <View style={Style.imageContainer}>
            <Image source={Images.TecNM}/>
        </View>
    );

    handleOnChangeTextEmail = (value) => this.setState({ email: value });

    handleOnChangeTextPassword = (value) => this.setState({ password: value });

    renderInputs = () => (
        <View style={Style.inputsContainer}>
            <InputComponent
                description={'E-mail'}
                placeholder={'Input your email'}
                onChangeValue={this.handleOnChangeTextEmail}
            />
            <View style={Style.inputsSpace}/>
            <InputComponent
                description={'Password'}
                placeholder={'Input your password'}
                isSecureEntry={true}
                onChangeValue={this.handleOnChangeTextPassword}
            />
        </View>
    );

    onPressLogin = async () => {
        const { email, password } = this.state;
        const { isSuccess, errors } = LoginController.validateFields(email, password);

        if (isSuccess) {
            const result = await LoginController.login(email, password);

            if (result) {
                this.props.navigation.navigate('Register');
            } else {
                Alert.alert('Login failed','Invalid email or password', [{ text: 'Ok' }]);
                // this.props.actionShowNotification('Login failed: Invalid email or password', NOTIFICATION_TYPE.CONFIRMATION);
            }
        } else {
            const textError = errors.length > 0 ? `Please enter a valid ${errors.join(', ')}` : '';
            
            Alert.alert('Invalid data', textError, [{ text: 'Ok' }]);
            // this.props.actionShowNotification(textError, NOTIFICATION_TYPE.ERROR);
        }
    };

    renderLoginButton = () => (
        <ButtonComponent
            text={'Login'}
            containerStyle={Style.loginContainer}
            onPress={this.onPressLogin}
        />
    );

    onPressRegister = () => this.props.navigation.navigate('Register');

    renderRegisterButton = () => (
        <ButtonComponent
            text={'Register'}
            containerStyle={Style.registerContainer}
            onPress={this.onPressRegister}
        />
    );

    onToggleValue = (newValue) => this.setState({ rememberSession: newValue});

    renderRemindSession = () => (
        <View style={Style.rememberSession}>
            <Text style={Style.rememberSessionText}>Remember Session</Text>
            <Switch
                trackColor={{ false: 'white', true: 'gray' }}
                onValueChange={this.onToggleValue}
                value={this.state.rememberSession}
            />
        </View>
    );

    renderForgotPassword = () => (
        <View style={Style.forgotPassword}>
            <Text style={Style.forgotPasswordText}>Forgot my password?</Text>
        </View>
    );

    renderActions = () => (
        <View style={Style.actionsContainer}>
            { this.renderLoginButton() }
            { this.renderRegisterButton() }
        </View>
    );

    render() {
        return (
            <ScrollView style={Style.scrollView}>
                <View style={Style.mainContainer}>
                    { this.renderTitle() }
                    { this.renderImage() }
                    { this.renderInputs() }
                    { this.renderRemindSession()}
                    { this.renderForgotPassword()}
                    { this.renderActions() }
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ loginReducer }) => {
    return {
        //
    };
};

const mapDispatchToProps = (dispatch) => ({
    actionShowNotification: (message, type) => dispatch(showNotification(message, type))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true },
)(LoginContainer);
