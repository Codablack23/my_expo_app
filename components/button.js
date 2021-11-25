import React,{useState,useEffect} from 'react'
import {View,TouchableWithoutFeedback,Text,TextInput} from 'react-native'
import {componentStyles as styles,themeColor} from '../global/styles'
import { AntDesign } from '@expo/vector-icons'; 
import PhoneModal from '../components/phoneModal'
import Header from '../components/header'


export default function Button({text,btnTheme,navigation,to,icons,eventFunction}){
  const setAction=()=>{
       if(navigation){
         navigation.navigate(to)
       }
       if(eventFunction){
         eventFunction()
       }
       console.log("No Navigation Provided")
  }
   if(btnTheme){
     return(
        <TouchableWithoutFeedback onPress={()=>{setAction()}}>
          <View style={{...styles.continueBtn,backgroundColor:btnTheme.background}}>
              
              <Text style={{color:btnTheme.text}}>
                   <Text>{icons}</Text>
                   <Text >{text}</Text>
              </Text>
          </View>
      </TouchableWithoutFeedback>
     )
   }
   else{
     
    return(
      <TouchableWithoutFeedback onPress={()=>{setAction()}}>
        <View style={{...styles.continueBtn,backgroundColor:themeColor.background}}>
            <Text style={{color:themeColor.text}}>{text}</Text>
        </View>
    </TouchableWithoutFeedback>
    )
   }
}