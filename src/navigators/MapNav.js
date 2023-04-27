import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../config/routes';
import { Events, Home} from '../screens';



const Stack = createStackNavigator();

export default function MapNav() {

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Group>
      <Stack.Screen name={routes.MAPNAV} component={Home} options={{headerShown:false}}/>
      </Stack.Group>

      <Stack.Group screenOptions={{presentation:"modal"}}>
      <Stack.Screen name={routes.EVENTS} component={Events} />
      </Stack.Group>
      
    </Stack.Navigator>
    
  );
}