import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountSetting, NewPass } from '../screens';
import routes from '../config/routes';

const Stack = createStackNavigator();

function Change() {
    return (
        <Stack.Navigator initialRouteName='AccountSetting'>
            <Stack.Screen
                name={routes.ACCOUNT_SETTINGS}
                component={AccountSetting}
                options={{headerShown:false}}
            />
            <Stack.Group screenOptions={{presentation:"modal"}}>

            <Stack.Screen
                name={routes.NEW_PASSWORD}
                component={NewPass}
                options={{headerShown:false}}
                
            />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default Change;