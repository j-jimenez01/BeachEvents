import Login from "./screens/Login";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // to nagivate to the different screens
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title:"Sign Up to BeachEvents",headerShown: true,headerStyle:{backgroundColor:'#000000'},
        headerTitleStyle:{color:'#c97b06',fontSize:25}}}
      />
      <Stack.Screen
      //name is what we use to navigate it to
      name = "Login"
      // component is the page name
      component={Login}
      // headerShown is the top part that shows backarrow
      options={{headerShown: false,headerStyle:{backgroundColor:'#000000'}}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title:"BeachEvents",headerShown:false,headerTitleStyle:{color:'#c97b06'}}}
        
      />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
