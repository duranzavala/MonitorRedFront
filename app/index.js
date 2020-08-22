import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '@Redux/store/store';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from '@Configuration/login.stack';
import Notification from '@Screens/notification/containers/notification.container';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <LoginStack/>
                    <Notification />
                </NavigationContainer>
            </Provider>
        );
    }
}
