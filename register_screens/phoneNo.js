import React from 'react'
import {View,TouchableWithoutFeedback,Text,TextInput,Modal} from 'react-native'
import {addphone as styles} from '../global/styles'
import { AntDesign } from '@expo/vector-icons'; 

export default function PhoneNoScreen(){
    return(
        <View style={styles.container}>
            <Modal 
             visible={false}
             >
                <View>
                    <Text>I am a Modal</Text>
                </View>
            </Modal>
            <View>
              <Text style={styles.headerText}>Enter Your Number</Text>
              <Text style={styles.infoText}>A Verification Code Will Be Sent To Your Mobile Number</Text>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.input}>
                  <TouchableWithoutFeedback>
                      <View style={styles.countrySelect}>
                         <View style={{marginRight:5,fontSize:18}}>
                         <Text style={{fontSize:18}}>NGN</Text>
                         </View>
                         <AntDesign name="down" size={22} color="black" />
                      </View>
                  </TouchableWithoutFeedback>
                  <View style={styles.phoneDetails}>
                      <Text style={styles.countryCode}>+234</Text>
                      <TextInput 
                       style={styles.number}
                       textContentType="telephoneNumber"
                       keyboardType="number-pad"
                       placeholder="111 222 333"
                      />
                  </View>
              </View>
              <View style={styles.btnContainer}>
                  <TouchableWithoutFeedback>
                      <View style={styles.continueBtn}>
                          <Text style={{color:"#ffffff"}}>Continue</Text>
                      </View>
                  </TouchableWithoutFeedback>
              </View>
           </View>
        </View>
    )
}