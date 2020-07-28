import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '@Redux/store/store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screens from '@Utilities/constants/screen.constants';
import LoginComponent from '@Screens/login/containers/login.container';

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name={Screens.SIGN_IN} component={LoginComponent} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}
