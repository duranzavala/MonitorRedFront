import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import Style from '@Utilities/components/input/style/input.component.style';

export default class InputComponent extends Component {
    handleOnChangeValue = (value) => {
        this.props.onChangeValue(value);
    }

    render() {
        const { description, placeholder, isSecureEntry = false } = this.props;

        return (
            <View style={Style.mainContainer}>
                <View style={Style.inputTextContainer}>
                    <Text style={Style.inputText}>{description}</Text>
                </View>
                <TextInput
                    style={Style.inputContainer}
                    placeholder={placeholder}
                    secureTextEntry={isSecureEntry}
                    onChangeText={this.handleOnChangeValue}
                />
            </View>
        )
    }
}
