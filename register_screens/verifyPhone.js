import React,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { verifyPhoneStyles as styles } from '../global/styles'
import  Header  from '../components/header'
import { TouchableWithoutFeedback,TextInput} from 'react-native'
import Button from '../components/button';
import { themeColor } from '../global/styles'
import VerifyPhoneModal from '../components/verifyPhoneModal'


const VerifyPhoneScreen=({navigation})=>{
    const [delay, setDelay]=useState(15)
    const [startTimer,setStartTimer]=useState(true)
    const [visible, setIsVisible]=useState(false)
  
    return(
        <View style={styles.container}>
            <VerifyPhoneModal
            visible={visible}
            number={`+234 824541568`}
            setVisiblity={setIsVisible}
            
            />
            <Header 
            back={navigation}
            title={"Verify Your Number"} 
            subtitle={"A 4-digit Code Has Been Sent To Your Mobile Number"} />
            <View style={styles.formContainer}>
               <View>
               <View style={styles.input}>
                 <View style={styles.digitContainer}>
                    <TextInput
                    keyboardType="number-pad"
                    style={styles.digit}
                    maxLength={1}
                    />
                 </View>
                 <View style={styles.digitContainer}>
                    <TextInput
                    keyboardType="number-pad"
                    style={styles.digit}
                    maxLength={1}
                    />
                 </View>
                 <View style={styles.digitContainer}>
                    <TextInput
                    keyboardType="number-pad"
                    style={styles.digit}
                    maxLength={1}
                    />
                 </View>
                 <View style={styles.digitContainer}>
                    <TextInput
                    style={styles.digit}
                    keyboardType="number-pad"
                    maxLength={1}
                    />
                 </View>

              </View> 
               </View>
              <View>
                  <View>
                     <TouchableWithoutFeedback onPress={()=>{setIsVisible(true)}}>
                       <View style={styles.resendCode}>
                           <Text style={styles.resendCodeText}>
                               <Text>Resend Code</Text>
                             {delay > 0 &&<Text> in {delay} seconds</Text>}
                           </Text>
                       </View>
                     </TouchableWithoutFeedback>
                  </View>
                  <Button 
                  navigation={navigation}
                  to={"SetUpProfile"}
                  text="Verify Number"/>
              </View>
           </View>
        </View>
    )
}

export default VerifyPhoneScreen