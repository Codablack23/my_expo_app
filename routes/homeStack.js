import React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { ScrollView, Text, View } from "react-native"
import HomeScreen from "../home_screens/home"
import {drawerStyles as styles,theme} from '../global/homestyles'
import { SimpleLineIcons,FontAwesome,AntDesign } from '@expo/vector-icons'; 
import Button from "../components/button"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import CustomDrawerContent from "../components/customdrawer"
import Payments from "../home_screens/paymentStack"
import DeliveriesStack from "../home_screens/deliveriesStack"
import SupportStack from "../home_screens/supportStack"


const Drawer=createDrawerNavigator()


export default function HomeStack(){
   return(
    <NavigationContainer>
        
    <Drawer.Navigator 
     drawerContent={(props) => <CustomDrawerContent {...props} />}
     initialRouteName="Home">
        
        <Drawer.Screen name="About"
        options={{
            headerShown:false
        }}
        
        component={HomeScreen}/>
         <Drawer.Screen name="profile"
        options={{
            headerShown:false
        }}
        
        component={HomeScreen}/>
          <Drawer.Screen name="Home"
        options={{
            headerShown:false
        }}
        
        component={HomeScreen}/>
          <Drawer.Screen name="deliveries"
        options={{
            headerShown:false
        }}
        
        component={DeliveriesStack}/>
        <Drawer.Screen
         name="Payment" 
         component={Payments}
         options={{
            headerShown:false
        }}
         />
        <Drawer.Screen 
        name="Support" 
        component={SupportStack}
        options={{
            headerShown:false
        }}
        />
    </Drawer.Navigator>
</NavigationContainer>
   )
}