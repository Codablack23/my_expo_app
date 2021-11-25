import React from 'react'
import {Text,View,TouchableWithoutFeedback,textInput, TextInput, FlatList} from 'react-native'
import Modal from '../global/modal'
import {modalStyles as styles} from '../global/homestyles'
import { EvilIcons,MaterialIcons,SimpleLineIcons } from '@expo/vector-icons'; 
import Button from './button';

export default function LocationDetails({data}){
    const renderItems=({item})=>{
        return(
          <View style={styles.location}>
            <Text style={styles.locationName}>{item.name}</Text>
          </View>
        )
      }
    return(
     <View style={{flex:1}}>
        <View style={styles.modalForm}>
        <View style={styles.input}>
            <Text style={styles.inputIcon}>
                <MaterialIcons name="my-location" size={24} color="#9e9e9e" />
            </Text>
            <TextInput 
                placeholder="Search Pick Up Location"
                style={styles.inputField}
            />
        </View>
        <View style={styles.input}>
            <Text style={styles.inputIcon}>
                <MaterialIcons name="my-location" size={24} color="#9e9e9e" />
            </Text>
            <TextInput 
                style={styles.inputField}
                placeholder="Search Delivery Location"
            />
        </View>
        </View>
        <View style={styles.searchResults}>
            <FlatList
                data={data}
                renderItem={renderItems}
                keyExtractor={item => item.id}
            />
        </View>
     </View>
    )
}
