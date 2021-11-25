import { createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer}  from '@react-navigation/native'
import React from 'react'
import AllDeliveries from './deliveriesScreen/allDeliveries'


const Stack=createNativeStackNavigator()

export default function DeliveriesStack(){
   return (
    <Stack.Navigator 
    initialRouteName="all_deliveries"
    >
      <Stack.Screen
        name="all_deliveries"
        component={AllDeliveries}
        options={
            {
                headerShown:false
            }}
       />
      <Stack.Screen
        name="delivery_detail"
        component={AllDeliveries} 
        options={
            {
            headerShown:false
            }}
       />   
    </Stack.Navigator>
   )
}