import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function menuNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AccountSetting" component={AccountSetting} />
      <Stack.Screen name="Organization" component={Organization} />
      <Stack.Screen name="Events" component={Events} />
    </Stack.Navigator>
  );
}