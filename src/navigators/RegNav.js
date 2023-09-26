import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../config/routes';
import { Register, Confirm } from '../screens';


const Stack = createStackNavigator();

export default function RegNav() {

  return (

    <Stack.Navigator initialRouteName={routes.REGISTER} //creates navigator for login
    >
      <Stack.Group>
      <Stack.Screen name={routes.REGISTER} component={Register} options={{headerShown:false}} //login page
      />
      </Stack.Group>

      <Stack.Group screenOptions={{presentation:"modal"}} //pop up
      >

      <Stack.Screen name={routes.FORGOT_PASSWORD} component={Confirm} //forgot page
       />
      </Stack.Group>

    </Stack.Navigator>
    
  );
}