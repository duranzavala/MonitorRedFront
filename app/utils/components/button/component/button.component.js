import React, { Component } from 'react';
import { Text, TouchableOpacity} from 'react-native';
import Style from '@Utilities/components/button/style/button.component.style';

export default class ButtonComponent extends Component {
    handleOnPress = () => {
        this.props.onPress();
    };

    render() {
        const {
            text,
            textStyle,
            containerStyle,
        } = this.props;

        return (
            <TouchableOpacity
                style={[Style.main, containerStyle]}
                onPress={this.handleOnPress}
            >
                <Text style={[Style.text, textStyle]}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
}
