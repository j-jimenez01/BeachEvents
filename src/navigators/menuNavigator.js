import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home/Home.js';
import AccountSetting from '../screens/Home/AccountSetting.js';
import Events from '../screens/Home/Events.js';
import Organization from '../screens/Home/Organization.js';
import colors from '../config/colors.js';
import NewPass from '../screens/Home/NewPass.js';

const Drawer = createDrawerNavigator();

export default function MenuNav() {
  return (
      
      <Drawer.Navigator initialRouteName="Home" useLegacyImplementation screenOptions={{
        headerTintColor:colors.third,
        drawerActiveTintColor: colors.third,
        drawerInactiveTintColor: "#fff",
        headerStyle:{backgroundColor: colors.secondary},
         drawerStyle: { backgroundColor: colors.secondary} }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Account Settings" component={AccountSetting}/>
        <Drawer.Screen name="Events" component={Events} />
        <Drawer.Screen name="Organization" component={Organization} />
        <Drawer.Screen name="Change Password" component={NewPass} />
      </Drawer.Navigator>
  );
}
