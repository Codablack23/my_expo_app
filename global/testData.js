import React from "react"
import { TouchableWithoutFeedback,View,Text } from "react-native"
import {addphone as styles} from '../global/styles'

const data=[
    {id:1,Name:"Nigeria",country_code:234},
    {id:2,Name:"Afghanistan",country_code:93},
    {id:3,Name:"Algeria",country_code:213},
    {id:4,Name:"Albanian",country_code:355},
    {id:5,Name:"America Samoa",country_code:1684},
]
const renderItems=({item})=><TouchableWithoutFeedback>
    <View style={styles.countryList}>
       <Text style={styles.countryListName}>{item.Name}</Text>
       <Text style={styles.countryListCode}>+{item.country_code}</Text>
    </View>
</TouchableWithoutFeedback>
export {
    data,
    renderItems
}