import { createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer}  from '@react-navigation/native'
import React from 'react'
import SelectPaymentMethod from './paymentsScreen/selectMethod'



const Stack=createNativeStackNavigator()

export default function Payments(){
   return (
    <Stack.Navigator 
    initialRouteName="selectPaymentMethod"
    >
      <Stack.Screen
        name="selectPaymentMethod"
        component={SelectPaymentMethod}
        options={
            {
                headerShown:false
            }}
       />
      <Stack.Screen
        name="AddCardDetails"
        component={SelectPaymentMethod} 
        options={
            {
            headerShown:false
            }}
       />   
    </Stack.Navigator>
   )
}