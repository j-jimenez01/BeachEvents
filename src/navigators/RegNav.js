import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../config/routes';
import { Register, Otp, Password } from '../screens';
import PinnedEvents from '../screens/Home/PinnedEvents';


const Stack = createStackNavigator();

export default function RegNav() {

  return (

    <Stack.Navigator initialRouteName={routes.REGISTER} //creates navigator for login
    >
      <Stack.Group >
      <Stack.Screen name={routes.REGISTER} component={Register} options={{headerShown:false}} //login page
      />
      <Stack.Screen options={{headerShown:false}} name={routes.OTP} component={Otp} //forgot page 
      />
      <Stack.Screen options={{headerShown:false}} name={routes.PASSWORD} component={Password} //forgot page 
      />
      </Stack.Group>
    </Stack.Navigator>
    
  );
}