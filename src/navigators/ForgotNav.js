import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../config/routes';
import { Confirm, Forgot,Otp,Password } from '../screens';


const Stack = createStackNavigator();

export default function ForgotNav() {

  return (

    <Stack.Navigator initialRouteName= {routes.FORGOT_PASSWORD}//creates navigator for login
    >
      <Stack.Group >
      <Stack.Screen name={routes.FORGOT_PASSWORD} component={Forgot} options={{headerShown:false}} //login page
      />

      <Stack.Screen options={{headerShown:false}} name={routes.OTP} component={Otp} //forgot page 
      />
      <Stack.Screen options={{headerShown:false}} name={routes.PASSWORD} component={Password} //forgot page 
      />
      {/* <Stack.Screen options={{headerShown:false}} name={routes.CONFIRM} component={Confirm} //forgot page 
      /> */}
      </Stack.Group>


    </Stack.Navigator>
    
  );
}



