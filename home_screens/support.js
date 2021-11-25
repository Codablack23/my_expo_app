import React,{useState} from "react";
import {View,Text,TouchableWithoutFeedback, ScrollView} from 'react-native'
import Header from "../components/header"
import {supportStyles as styles,theme} from '../global/homestyles'
import { AntDesign,Ionicons } from '@expo/vector-icons'; 
import { FAB } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 




export default function Support({navigation}){
    return(
        <View style={styles.container}>
            <Header
            title="Support"
            back={navigation}
            />
            <View style={styles.textArea}>
                 <Text style={styles.Message}></Text>
            </View>
            <View style={styles.floatingActionBtn}>
                <TouchableWithoutFeedback>
                    <View style={styles.FAB}>
                    <MaterialCommunityIcons name="pencil-plus-outline" size={30} color="black" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}