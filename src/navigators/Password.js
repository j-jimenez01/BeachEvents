import { createStackNavigator } from '@react-navigation/stack';
import ChangePassword from '../screens/Home/ChangePassword';
import AccountSetting from '../screens/Home/AccountSetting';

const Stack = createStackNavigator();

export default function Password() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account Setting" component={AccountSetting} />
      <Stack.Screen name="Change Password" component={ChangePassword} />
    </Stack.Navigator>
  );
}