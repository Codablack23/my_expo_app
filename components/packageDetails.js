import React, { useState } from 'react'
import {Text,View,TouchableWithoutFeedback,textInput, TextInput, FlatList} from 'react-native'
import Modal from '../global/modal'
import {modalStyles as styles} from '../global/homestyles'
import { EvilIcons,MaterialIcons,SimpleLineIcons,AntDesign } from '@expo/vector-icons'; 
import Button from './button';
import { CheckBox } from 'react-native-elements';


export default function PackageDetails(){
    const [category,setCategory]=useState("")
    const [quantity,setQuantity]=useState(1)
    const addQuantity=(increment)=>{
        setQuantity(previousState=>{
             if(previousState < 1){
               return 1
             }
             else{
                return previousState += increment
             }
            
        })
    }
    const data=[
        {id:1,Category:"Electronics"},
        {id:2,Category:"Groceries"},
        {id:3,Category:"Raw Materials"},
        {id:4,Category:"Others"}
    ]
    const showCategories=({item})=>
     <TouchableWithoutFeedback onPress={()=>{setCategory(item.Category)}}>
        <View style={styles.category}>
            <Text style={styles.categoryText}>{item.Category}</Text>
            <CheckBox 
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor='#BDBDBD'
            checked={category==item.Category && true}
          
            />
        </View>
    </TouchableWithoutFeedback>
    
return(
<View style={{flex:1}}>
    <View style={styles.packageForm}>
     <View>
         <View style={styles.sizes}>
             <View style={styles.weightInput}>
               <TextInput
               placeholder="Package Weight (g)"
               keyboardType="number-pad"
               maxLength={100}
               style={{fontSize:15}}
               />
             </View>
             <View>
                 <View>
                     <Text>Add Quantity</Text>
                 </View>
             <View style={styles.quantityContainer}>
                <TouchableWithoutFeedback onPress={()=>{addQuantity(-1)}}>
                    <View style={styles.increase}>
                      <Text><AntDesign name="minus" size={24} color="black"/></Text>
                    </View>
                </TouchableWithoutFeedback>
               <Text
               style={{...styles.quantity,fontSize:20,textAlign:"center"}}
               >{quantity}</Text>
               <TouchableWithoutFeedback onPress={()=>{addQuantity(1)}}>
                    <View style={styles.reduce}>
                      <Text><AntDesign name="plus" size={24} color="black"/></Text>
                    </View>
                </TouchableWithoutFeedback>
             </View>
             </View>
             <View style={{...styles.selectCategory,width:"100%"}}>
                   <View style={{paddingVertical:"4%",borderBottomColor:"#eee",borderBottomWidth:1,alignItems:"center"}}>
                       <Text>Select Package Type</Text>
                   </View>
               <FlatList
                 data={data}
                 renderItem={showCategories}
                 keyExtractor={item=>String(item.id)}
               />
               
             </View>
             <View style={{padding:"3%",borderRadius:10,backgroundColor:"#fafafa",width:"100%",alignItems:"center"}}>
              <Text style={{fontSize:15,color:"#bdbdbd"}}>Fee: N1000 per Kg(1000g = 1Kg)</Text>
            </View>
         </View>
         
     </View>
    </View>
</View>
)
}