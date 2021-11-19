import React from 'react'
import { View, Text, StyleSheet,TextInput,TouchableWithoutFeedback,Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import SvgComponent from '../global/svg'
import {getStarted as styles, themeColor} from '../global/styles'
import Button from '../components/button';
import {delivery} from '../global/svgfille'

function GetStarted({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <SvgComponent
                svg={delivery}
                height={250}
                width={250}
                />
            </View>
           <View style={styles.welcome}>
               <Text style={styles.welcomeHeading}>
                   Welcome To Transport It
               </Text>
               <Text style={styles.welcomeText}>
                  Lorem Ipsum laore lvida Local To the World Because og the Good Inovation Made By The Users
               </Text>
           </View>
           <View style={styles.btnContainer}>
               <Button 
                btnTheme={{
                    background:"#ffffff",
                    text:"#212121"
                }}
                text={"Continue As Dispatch Rider"}
               />
             <View style={{marginTop:"4%"}}>
             <Button 
                navigation={navigation}
                to="AddPhoneNumber"
                text={"Continue As A User"}
               />
             </View>
           </View>
        </View>

    )
}

export default GetStarted;