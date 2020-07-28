import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LoginContainer extends Component {
    render() {
        return (
            <View>
                <Text> prop </Text>
            </View>
        );
    }
}

const mapStateToProps = ({ loginReducer }) => {
    return {
        //
    };
};

const mapDispatchToProps = (dispatch) => ({
    //
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true },
)(LoginContainer);
