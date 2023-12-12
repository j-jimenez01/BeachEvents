import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../config/routes';
import { SubOrg, Subscribe } from '../screens';
import PinnedEvents from '../screens/Home/PinnedEvents';



//navigator for the subscribe to club events
const Stack = createStackNavigator();

export default function PinNav() {

    return (
        <Stack.Navigator initialRouteName={routes.PINNED_EVENTS}>
            <Stack.Group>
                <Stack.Screen name={routes.PINNED_EVENTS} component={PinnedEvents} options={{ headerShown: false }} />
            </Stack.Group>
        </Stack.Navigator>
    );
}