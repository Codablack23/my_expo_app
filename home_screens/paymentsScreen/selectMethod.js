import React,{useState} from "react";
import {View,Text,TouchableWithoutFeedback, ScrollView} from 'react-native'
import Header from "../../components/header";
import {paymentStyles as styles,theme} from '../../global/homestyles'
import { CheckBox } from 'react-native-elements';


export default function SelectPaymentMethod({navigation}){
    const [method,setMethod]=useState("cash")
    const methods=[
       {id:"1",Name:"cash"},
       {id:"2",Name:"card"},
    ]
    return(
        <View style={styles.container}>
            <Header
            title="Payment Method"
            back={navigation}
            />
            <View style={styles.content}>
              <Text>Select Payment Method</Text>
              <ScrollView style={styles.methodContainer}>
                {
                    methods.map((item)=>
                    <View key={item.id}>
                      <TouchableWithoutFeedback onPress={()=>{setMethod(item.Name)}}>
                        <View style={styles.method}>
                            <Text style={styles.methodText}>{item.Name}</Text>
                            <CheckBox 
                            onPress={()=>{setMethod(item.Name)}}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checkedColor={theme.background}
                            checked={method==item.Name && true}
                        
                            />
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                    )
                }                 
              </ScrollView>
            </View>
        </View>
    )
}