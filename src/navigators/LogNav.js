import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../config/routes';
import { Forgot, Login, MenuNav, Register, RegNav, ForgotNav} from '../screens';
import { BackHandler } from 'react-native';


const Stack = createStackNavigator();

export default function LogNav() {

  return (

    <Stack.Navigator initialRouteName={routes.LOGIN} screenOptions={BackHandler} //creates navigator for login
    >
      <Stack.Group>
      <Stack.Screen name={routes.LOGIN} component={Login} options={{headerShown:false, gestureEnabled:false}} //login page
      />
      </Stack.Group>

      <Stack.Group screenOptions={{presentation:"modal"}} //pop up
      >

      <Stack.Screen name={routes.FORGOT_PASSWORD} component={ForgotNav} //forgot page
       />
     
      <Stack.Screen name={routes.REGISTER} component={RegNav} //Register page
       />
     
      </Stack.Group>
      
      <Stack.Group>

      <Stack.Screen name={routes.MENU_NAVIGATOR} component={MenuNav} options={{headerShown:false,  gestureEnabled:false}}  //Home page with the menu navigator
      />
      </Stack.Group>
    </Stack.Navigator>
    
  );
}