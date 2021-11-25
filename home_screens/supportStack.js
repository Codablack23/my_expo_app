import { createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import Support from './support'

const Stack=createNativeStackNavigator()

export default function SupportStack(){
   return (
    <Stack.Navigator 
    initialRouteName=""
    >
      <Stack.Screen
        name="support"
        component={Support}
        options={
            {
                headerShown:false
            }}
       />
    </Stack.Navigator>
   )
}