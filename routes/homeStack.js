import React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "../home_screens/home"

const Drawer = createDrawerNavigator()

export default function HomeStack(){
   return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="About"
        options={{
            headerShown:false
        }}
        component={HomeScreen}/>
        <Drawer.Screen
         name="Payment" 
         component={HomeScreen}
         options={{
            headerShown:false
        }}
         />
        <Drawer.Screen 
        name="Add Product" 
        component={HomeScreen}
        options={{
            headerShown:false
        }}
        />
        <Drawer.Screen 
        name="Support" 
        component={HomeScreen}
         options={{
            headerShown:false
        }}
        />
    </Drawer.Navigator>
</NavigationContainer>
   )
}