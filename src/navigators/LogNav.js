import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../config/routes';
import { Forgot, Login, MenuNav, Otp, Register } from '../screens';
import Password from '../screens/Auth/Password';


const Stack = createStackNavigator();

export default function LogNav() {

  return (

    <Stack.Navigator initialRouteName={routes.LOGIN} //creates navigator for login
    >
      <Stack.Group>
      <Stack.Screen name={routes.LOGIN} component={Login} options={{headerShown:false}} //login page
      />
      </Stack.Group>

      <Stack.Group screenOptions={{presentation:"modal"}}>

        <Stack.Screen name={routes.FORGOT_PASSWORD} component={Forgot} options={{headerShown:false}}/>
        
        <Stack.Screen name={routes.REGISTER} component={Register} options={{headerShown:false}}/> 
      
        <Stack.Screen name = {routes.OTP} component={Otp} initialParams={{ otp: 1111 }} options={{headerShown: false}}/>
        <Stack.Screen name = {routes.PASSWORD} component={ Password } options={{headerShown: false}}/>
        
      </Stack.Group>
      
      <Stack.Group>

      <Stack.Screen name={routes.MENU_NAVIGATOR} component={MenuNav} options={{headerShown:false}}  //Home page with the menu navigator
      />
      </Stack.Group>
    </Stack.Navigator>
  );
}