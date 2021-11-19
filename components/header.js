import React from 'react'
import {componentStyles as styles} from '../global/styles'
import {View, Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header({title,subtitle,back}){
  const navigateBack=()=>{
       if(back){
         back.goBack()
       }
       else{
         console.log("No Navigation Provided")
       }
  }
  return(
    <View>
    <TouchableWithoutFeedback onPress={()=>{navigateBack()}}>
      <View>
      <Text style={{marginRight:"10%"}}> <AntDesign name="arrowleft" size={30} color="black" /></Text>
      </View>
    </TouchableWithoutFeedback>
    <Text style={styles.headerText}>{title}</Text>
    <Text style={styles.infoText}>{subtitle}</Text>
  </View>
  )
}