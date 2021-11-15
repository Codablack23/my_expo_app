import React from 'react'
import { View, Text, StyleSheet,TextInput,TouchableWithoutFeedback,Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import SvgComponent from '../global/svg'
import {getStarted as styles} from '../global/styles'

function GetStarted(){
    return(
        <View style={styles.container}>
             <View style={styles.welcome}>
               <View style={styles.textContainer}>
                 <Text style={styles.text}>Welcome To Lets Go Taxi</Text>
               </View>
                <View style={styles.imageContainer}>
                   <SvgComponent/>           
                </View>
            </View>
            <View>
            <View style={styles.inputContainer}>
                 <View style={styles.inputText}>
                     <Text style={{color:'#ffffff',fontSize:18}}>Get Started</Text>
                 </View>
              <TouchableWithoutFeedback onPress={()=>{console.log("button clicked")}}>
                 <View style={styles.go}>
                 <AntDesign name="right" size={24} color="#6c63ff" />
                 </View>
              </TouchableWithoutFeedback>
             </View>
            </View>
        </View>

    )
}

export default GetStarted;