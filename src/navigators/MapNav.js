import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../config/routes';
import { Events, Home, PinnedEvents} from '../screens';

//navigator for the map

const Stack = createStackNavigator();

export default function MapNav() {

  return (
    <Stack.Navigator initialRouteName='Home' //Creates navigator and starts with home page
    >
      <Stack.Group>
      <Stack.Screen name={routes.MAPNAV} component={Home} options={{headerShown:false}} //home page
      />
      </Stack.Group>

      <Stack.Group screenOptions={{presentation:"modal"}}>
      <Stack.Screen name={routes.EVENTS} component={Events} //events page
      />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation:"modal"}}>
      <Stack.Screen name={routes.PINNED_EVENTS} component={PinnedEvents} //events page
      />
      </Stack.Group>
      
    </Stack.Navigator>
    
  );
}