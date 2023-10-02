import React from "react";
import { StackView, createStackNavigator } from "@react-navigation/stack";
import routes from "../config/routes";
import { Confirm, Forgot } from "../screens";

const Stack = createStackNavigator();

export default function ForgotNav(){
    
    
return(    
<Stack.Navigator initialRouteName={routes.FORGOT_PASSWORD}>

    <Stack.Screen name= {routes.FORGOT_PASSWORD} component={Forgot}/>
    <Stack.Screen name= {routes.CONFIRM} component={Confirm}/>

</Stack.Navigator>
);}

