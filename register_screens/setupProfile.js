import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {createProfileStyles as styles,themeColor} from '../global/styles'
import Header
 from '../components/header'
import { TextInput } from 'react-native'
import Button from '../components/button'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


const SetUpProfileScreen=({navigation})=>{
    
    return(
        <View style={styles.container}>
            <Header
            back={navigation}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Create Profile</Text>
            </View>
            <View style={styles.form}>
              <View style={styles.userInput}>
                 <View style={styles.emailContainer}>
                    <Text>Your Email</Text>
                    <View style={styles.inputField}>
                        <TextInput
                         placeholder="example@host.domain"
                        style={styles.textInput}/>
                        <Text style={styles.inputIcon}>
                      
                        </Text>
                    </View>
                </View>
                <View style={styles.fullNameContainer}>
                    <Text>Your FullName</Text>
                    <View style={styles.inputField}>
                        <TextInput 
                        placeholder="Jane Doe"
                        style={styles.textInput}/>
                        <Text style={styles.inputIcon}></Text>
                    </View>
                </View>
                <View style={styles.signUpMethods}>
                    <Text style={styles.signUpText}>Or</Text>
                    <View style={styles.signUpMethodsBtn}>
                       <Button 
                       icons={<AntDesign name="googleplus" size={20} color="#F57C00" />}
                       text={"    Continue With Google"}
                       btnTheme={
                        {
                            background:"#ffffff",
                            text:'#F57C00'
                        }
                       }
                       
                       />
                    </View>
                    <View style={styles.signUpMethodsBtn}>
                       <Button 
                       icons={<FontAwesome5 name="facebook" size={24} color={themeColor.background} />}
                       text={"      Continue With Facebook"}
                       btnTheme={
                        {
                            background:"#ffffff",
                            text:themeColor.background
                        }
                       }
                       />
                    </View>

                </View>
              </View>
              <View style={styles.submitButton}>

              <Button text={"Finish Registration"}/>
             </View>
            
            </View>
        </View>
    )
}

export default SetUpProfileScreen