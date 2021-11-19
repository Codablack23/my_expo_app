import { createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer}  from '@react-navigation/native'
import React from 'react'
import GetStarted from '../register_screens/getStarted'
import CardDetailsScreen from '../register_screens/addCard'
import SetUpProfileScreen from '../register_screens/setupProfile'
import VerifyPhoneScreen from '../register_screens/verifyPhone'
import PhoneNoScreen from '../register_screens/phoneNo'
import { View } from 'react-native'


const Stack=createNativeStackNavigator()

export default function RegisterStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="GetStarted"
            >
              <Stack.Screen
               name="GetStarted"
               component={GetStarted}
               options={
                 {
                    headerShown:false
                 }}
               />
                 <Stack.Screen
               name="AddPhoneNumber"
               component={PhoneNoScreen}
               options={
                 {
                    headerShown:false
                 }}
               />
              <Stack.Screen 
              name="VerifyPhone"
               options={
                {
                   headerShown:false
                }}
              component={VerifyPhoneScreen} 
              />
              <Stack.Screen 
              name="SetUpProfile" 
              component={SetUpProfileScreen} 
              options={
                {
                   headerShown:false
                }}/>
              <Stack.Screen
               name="AddCardDetails"
               component={CardDetailsScreen} 
               options={
                {
                   headerShown:false
                }}
               />   
            </Stack.Navigator>
        </NavigationContainer>
    )
}