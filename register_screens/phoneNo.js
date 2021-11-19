import React,{useState} from 'react'
import {View,TouchableWithoutFeedback,Text,TextInput} from 'react-native'
import {addphone as styles} from '../global/styles'
import { AntDesign } from '@expo/vector-icons'; 
import PhoneModal from '../components/phoneModal'
import Header from '../components/header'
import Button from '../components/button';

export default function PhoneNoScreen({navigation}){
    const [modalOpened,setModalOpened] =useState(false)
    const [countryCode,setCountryCode]=useState(234)
    const [symbol,setSymbol]=useState('NGN')
    return(
        <View style={styles.container}>
            <PhoneModal
             setCountryCode={setCountryCode}
             openModal={setModalOpened}
             setSymbol={setSymbol}
             shown={modalOpened}
            />
            <Header
              back={navigation}
              title={'Enter Your Number'}
              subtitle={"A Verification Code Will Be Sent To Your Mobile Number"}
            />
            <View style={styles.formContainer}>
              <View style={styles.input}>
                  <TouchableWithoutFeedback onPress={()=>{setModalOpened(true)}}>
                      <View style={styles.countrySelect}>
                         <View style={{marginRight:5,fontSize:18}}>
                         <Text style={{fontSize:18}}>{symbol}</Text>
                         </View>
                         <AntDesign name="down" size={22} color="black" />
                      </View>
                  </TouchableWithoutFeedback>
                  <View style={styles.phoneDetails}>
                      <Text style={styles.countryCode}>+{countryCode}</Text>
                      <TextInput 
                       style={styles.number}
                       textContentType="telephoneNumber"
                       keyboardType="number-pad"
                       placeholder="111 222 333"
                      />
                  </View>
              </View>
              <View style={styles.btnContainer}>
                <Button 
                navigation={navigation}
                to={"VerifyPhone"}
                text="Continue"/>
              </View>
           </View>
        </View>
    )
}