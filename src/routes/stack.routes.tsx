import React from "react";

import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator ();

export function StackRoutes() {
    return(
        <Navigator 
            initialRouteName="SignIn"
        >
            <Screen 
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
        </Navigator>
    );
}