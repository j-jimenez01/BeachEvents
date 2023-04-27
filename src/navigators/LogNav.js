import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../config/routes';
import { Forgot, Login, MenuNav, Register } from '../screens';


const Stack = createStackNavigator();

export default function LogNav() {

  return (
    <Stack.Navigator initialRouteName={routes.LOGIN}>
      <Stack.Group>
      <Stack.Screen name={routes.LOGIN} component={Login} options={{headerShown:false}}/>
      </Stack.Group>

      <Stack.Group screenOptions={{presentation:"modal"}}>

      <Stack.Screen name={routes.FORGOT_PASSWORD} component={Forgot} />
      <Stack.Screen name={routes.REGISTER} component={Register} />
      </Stack.Group>
      
      <Stack.Group>

      <Stack.Screen name={routes.MENU_NAVIGATOR} component={MenuNav} options={{headerShown:false}}/>
      </Stack.Group>
    </Stack.Navigator>
    
  );
}