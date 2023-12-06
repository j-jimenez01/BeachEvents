//This Navigator is for changing the users password
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountSetting, NewPass } from '../screens';
import routes from '../config/routes';

const Stack = createStackNavigator();

function Change() {
    return (
        //creates stack
        <Stack.Navigator initialRouteName='AccountSetting'>
            <Stack.Screen
                name={routes.ACCOUNT_SETTINGS}
                component={AccountSetting} //Goes to account setting page
                options={{headerShown:false}}
            />

            <Stack.Screen
                name={routes.NEW_PASSWORD}
                component={NewPass}// goes to New password page
                options={{headerShown:true}}
                
            />
        </Stack.Navigator>
    );
}

export default Change;