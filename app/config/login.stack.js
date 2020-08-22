
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from '@Screens/login/containers/login.container';
import RegisterComponent from '@Screens/register/containers/register.container';
import React, { Component } from 'react';
import Screens from '@Utilities/constants/screen.constants';

const Stack = createStackNavigator();

export default class LoginStack extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName={LoginComponent}
                headerMode="screen"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'rgb(31,130,240)' },
                }}
            >
                <Stack.Screen
                    name={Screens.SIGN_IN}
                    component={LoginComponent}
                    options={{
                        title: 'Login',
                    }}
                />
                <Stack.Screen
                    name={Screens.SIGN_UP}
                    component={RegisterComponent}
                    options={{
                        title: 'Register',
                    }}
                />
            </Stack.Navigator>
        );
    }
};