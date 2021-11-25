import React from "react"
import { ScrollView, Text, View } from "react-native"
import {drawerStyles as styles,theme} from '../global/homestyles'
import { SimpleLineIcons,FontAwesome,AntDesign } from '@expo/vector-icons'; 
import Button from "../components/button"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"


 export default function CustomDrawerContent({ navigation }) {
    const Links=[
     {id:"1",Name:"Payment Methods",Link:"Payment",iconName:"creditcard"},
     {id:"2",Name:"Delivery History",Link:"deliveries",iconName:"profile"},
     {id:"4",Name:"About",Link:"About",iconName:"staro"},
     {id:"5",Name:"Support",Link:"Support",iconName:"mail"},
     {id:"6",Name:"My Profile",Link:"profile",iconName:"setting"}
    
    ]
    return (
     <View style={styles.container}>
         <View style={styles.header}>
             <View style={{alignItems:"center"}}>
                 <Text style={{color:theme.text}}>
                 <FontAwesome name="user-circle-o" size={70} color={theme.background} />
                 </Text>
             </View>
         </View>
         <View style={styles.navigation}>
            <ScrollView>
                {Links.map((item)=>
                   <View style={styles.navLinks} key={item.id}>
                       <TouchableWithoutFeedback onPress={()=>{navigation.navigate(item.Link)}}>
                           <View style={styles.linkContainer}>
                               <Text>
                                   <AntDesign name={item.iconName} size={24} color={"#fff"} />
                               </Text>
                               <Text style={{marginLeft:"10%",color:"#fff"}}>{item.Name}</Text>
                           </View>
                       </TouchableWithoutFeedback>
                   </View>
                )}
            </ScrollView>
         </View>
         <View>
           <TouchableWithoutFeedback>
              <View style={styles.logout}>
                  <Text style={{color:"#fff"}}>Log out</Text>
              </View>
           </TouchableWithoutFeedback>
         </View>
     </View>
    )
  }