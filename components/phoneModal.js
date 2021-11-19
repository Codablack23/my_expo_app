import ModalComponent from '../global/modal'
import React from 'react'
import {View,Text,TextInput,TouchableWithoutFeedback,FlatList} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import {addphone as styles} from '../global/styles'


export default function PhoneModal({shown,openModal,setCountryCode,setSymbol}){
    const data=[
        {id:1,Name:"Nigeria",country_code:234,Symbol:"NGN"},
        {id:2,Name:"Afghanistan",country_code:93,Symbol:"AFG"},
        {id:3,Name:"Algeria",country_code:213,Symbol:"ALG"},
        {id:4,Name:"Albanian",country_code:355, Symbol:"ALB"},
        {id:5,Name:"America Samoa",country_code:1684, Symbol:"AMS"},
    ]
    const renderItems=({item})=><TouchableWithoutFeedback onPress={()=>{setCountryCode(item.country_code);setSymbol(item.Symbol);openModal(false)}}>
        <View style={styles.countryList}>
           <Text style={styles.countryListName}>{item.Symbol}</Text>
           <Text style={styles.countryListName}>{item.Name}</Text>
           <Text style={styles.countryListCode}>+{item.country_code}</Text>
        </View>
    </TouchableWithoutFeedback>

return(
<ModalComponent isVisible={shown}>
<View style={styles.modalContent}>
    <View style={styles.modalHeader}>
      <TouchableWithoutFeedback onPress={()=>{openModal(false)}}>
      <Text style={{marginRight:"10%"}}> <AntDesign name="arrowleft" size={30} color="black" /></Text>
      </TouchableWithoutFeedback>
      <Text style={{fontSize:18,fontWeight:"bold"}}>Select Country Code</Text>
    </View>
    <View style={styles.modalSearch}>
        <Text   style={styles.modalSearchIcon}> <AntDesign name="search1" size={30} color="black" /></Text>
        <TextInput
        placeholder="Search Country"
        style={styles.modalSearchInput}
        />
   </View>
   <View style={styles.modalList}>
       <FlatList
           data={data}
           renderItem={renderItems}
           keyExtractor={item => item.id}
       />
   </View>
</View>
</ModalComponent>
)
}