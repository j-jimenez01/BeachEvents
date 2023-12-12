import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import color from '../config/color.js';
import routes from '../config/routes.js';
import { MapNav, SubNav, Change } from '../screens/index.js';
import {Events, Organization} from '../screens';
import PinNav from './PinNav.js';
import PinnedEvents from '../screens/Home/PinnedEvents.js';

const Drawer = createDrawerNavigator();

//Main navigator with a drawer, for the main menu

export default function MenuNav() {
  return (
      
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ //design of the drawer
        headerTintColor:color.yellow,

        drawerActiveTintColor: color.yellow,
        drawerInactiveTintColor: color.third,
        headerStyle:{backgroundColor: color.secondary},
        drawerStyle: { backgroundColor: color.secondary},
        drawerType: "slide"
        }}
         
         
         >
        

        <Drawer.Screen name={routes.HOME} component={MapNav} //All the paged in the drawer
        />
        <Drawer.Screen name={routes.ACCOUNT_SETTINGS} component={Change}/>
        <Drawer.Screen name={routes.EVENTS} component={Events} />
        <Drawer.Screen name={routes.ORGANIZATION} component={Organization} />
        <Drawer.Screen name={routes.SUBSCRIBE} component={SubNav} />
        {/* <Drawer.Screen name={routes.PINNED_EVENTS} component={PinnedEvents} /> */}

      
      </Drawer.Navigator>
  );
}