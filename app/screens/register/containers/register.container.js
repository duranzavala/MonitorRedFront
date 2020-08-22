import React, { Component } from 'react';
import {
    Alert,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import ButtonComponent from '@Utilities/components/button/component/button.component';
import InputComponent from '@Utilities/components/input/component/input.component';
import Style from '@Screens/register/styles/register.container.style';
import RegisterController from '@Controllers/register.controller';
import { showNotification } from '@Redux/services/notification.service';
import { NOTIFICATION_TYPE } from '@Utilities/constants/data.constants';

class RegisterContainer extends Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        errors: [],
    };

    renderTitle = () => (
        <View style={Style.titleContainer}>
            <Text style={Style.title}>User Registration</Text>
        </View>
    );

    handleOnChangeFirstName = (value) => this.setState({ firstName: value });

    renderInputFirstName = () => (
        <InputComponent
            description={'First name'}
            placeholder={'Input your first name'}
            onChangeValue={this.handleOnChangeFirstName}
        />
    );

    handleOnChangeLastName = (value) => this.setState({ lastName: value });

    renderInputLastName = () => (
        <InputComponent
            description={'Last name'}
            placeholder={'Input your last name'}
            onChangeValue={this.handleOnChangeLastName}
        />
    );

    handleOnChangeEmail = (value) => this.setState({ email: value });

    renderInputEmail = () => (
        <InputComponent
            description={'Email'}
            placeholder={'Input your email'}
            onChangeValue={this.handleOnChangeEmail}
        />
    );
    
    handleOnChangePassword = (value) => this.setState({ password: value });

    renderInputPassword = () => (
        <InputComponent
            description={'Password'}
            placeholder={'Input your passwod'}
            isSecureEntry={true}
            onChangeValue={this.handleOnChangePassword}
        />
    );

    handleOnChangeConfirmPassword = (value) => this.setState({ confirmPassword: value });
    
    renderInputConfirmPassword = () => (
        <InputComponent
            description={'Confirm Password'}
            placeholder={'Confirm your passwod'}
            isSecureEntry={true}
            onChangeValue={this.handleOnChangeConfirmPassword}
        />
    );

    renderInputs = () => (
        <View style={Style.inputsContainer}>
            { this.renderInputFirstName() }
            <View style={Style.inputsSpace}/>
            { this.renderInputLastName() }
            <View style={Style.inputsSpace}/>
            { this.renderInputEmail() }
            <View style={Style.inputsSpace}/>
            { this.renderInputPassword() }
            <View style={Style.inputsSpace}/>
            { this.renderInputConfirmPassword() }
        </View>
    );

    onPressRegister = async () => {
        const { isSuccess, errors } = RegisterController.validateFields(this.state);

        if (isSuccess) {
            const result = RegisterController.registerUser(email, password);

            if (result) {
                this.props.navigation.navigate('Register');
            } else {
                Alert.alert('Register failed','Invalid email or password', [{ text: 'Ok' }]);
                // this.props.actionShowNotification('Login failed: Invalid email or password', NOTIFICATION_TYPE.CONFIRMATION);
            }
        } else {
            const textError = errors.length > 0 ? errors.join(', ') : '';
            
            Alert.alert('Please verify the following fields', textError, [{ text: 'Ok' }]);
            // this.props.actionShowNotification(textError, NOTIFICATION_TYPE.ERROR);
        }
    }

    renderActions = () => (
        <View style={Style.actionsContainer}>
            <ButtonComponent
                text={'Register'}
                containerStyle={Style.registerContainer}
                onPress={this.onPressRegister}
            />
        </View>
    );

    render() {
        return (
            <ScrollView style={Style.scrollView}>
                <View style={Style.mainContainer}>
                    { this.renderTitle() }
                    { this.renderInputs() }
                    <View style={Style.inputsSpace}/>
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
)(RegisterContainer);
