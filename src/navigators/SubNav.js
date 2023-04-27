import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../config/routes';
import { SubOrg, Subscribe } from '../screens';



const Stack = createStackNavigator();

export default function SubNav() {

  return (
    <Stack.Navigator initialRouteName={routes.SUBSCRIBE}>
      <Stack.Group>
      <Stack.Screen name={routes.SUBSCRIBE} component={Subscribe} options={{headerShown:false}}/>
      </Stack.Group>

      <Stack.Group screenOptions={{presentation:"modal"}}>
      <Stack.Screen name={routes.SUBORG} component={SubOrg} />
      </Stack.Group>
      
    </Stack.Navigator>
    
  );
}