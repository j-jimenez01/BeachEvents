import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import color from '../config/color.js';
import routes from '../config/routes.js';
import { MapNav, SubNav, Change } from '../screens/index.js';
import {Events, Organization} from '../screens';

const Drawer = createDrawerNavigator();

export default function MenuNav() {
  return (
      
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerTintColor:color.third,
        drawerActiveTintColor: color.third,
        drawerInactiveTintColor: "#fff",
        headerStyle:{backgroundColor: color.secondary},
         drawerStyle: { backgroundColor: color.secondary} }}>
        
        <Drawer.Screen name={routes.HOME} component={MapNav}/>
        <Drawer.Screen name={routes.CHANGE} component={Change}/>
        <Drawer.Screen name={routes.EVENTS} component={Events} />
        <Drawer.Screen name={routes.ORGANIZATION} component={Organization} />
        <Drawer.Screen name={routes.SUBSCRIBE} component={SubNav} />
      
      </Drawer.Navigator>
  );
}