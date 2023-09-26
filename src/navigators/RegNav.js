import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../config/routes';
import { Register, Confirm } from '../screens';


const Stack = createStackNavigator();

export default function RegNav() {

  return (

    <Stack.Navigator initialRouteName={routes.REGISTER} //creates navigator for login
    >
      <Stack.Group >
      <Stack.Screen name={routes.REGISTER} component={Register} options={{headerShown:false}} //login page
      />
      
      <Stack.Screen options={{headerShown:false}} name={routes.CONFIRM} component={Confirm} //forgot page 
      />
      </Stack.Group>


    </Stack.Navigator>
    
  );
}