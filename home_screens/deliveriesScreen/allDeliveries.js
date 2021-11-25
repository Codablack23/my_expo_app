import React,{useState} from "react";
import {View,Text,TouchableWithoutFeedback, ScrollView} from 'react-native'
import Header from "../../components/header";
import {deliveryStyles as styles,theme} from '../../global/homestyles'
import { CheckBox } from 'react-native-elements';
import { FlatList } from "react-native-gesture-handler";
import SvgComponent from "../../global/svg";
import {empty as svg} from '../../global/svgfille'


export default function AllDeliveries({navigation}){
    const date=new Date()
    const logs=[
        // {
        //    Id:"1",
        //    Log:"log.GoodluckEdih.20/11/21.1",
        //    Date:`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        //    Price:10000,
        //    Dispatch_Rider:"John Doe",
        //    Distance:10,
        //    Total_Weight:1000000
        // }
    ]
    const getLogs=({item})=>{
      return(
          <View style={styles.log}>
              <Text style={styles.logName}>{item.Log}</Text>
              <View style={styles.logDetails}>
                <Text style={styles.logText}>{item.Date}</Text>
                <Text style={styles.logText}>N{item.Price}</Text>
              </View>
          </View>
      )
    }
    const renderEmptyComponent=()=>
      <View style={{flex:1,alignItems:"center",paddingVertical:"10%"}}>
           <SvgComponent svg={svg}
           width={200}
           height={200}
           />
           <Text style={{color:theme.background,marginTop:"3%"}}>There Are No Deliveries Yet</Text>
      </View>
    return(
        <View style={styles.container}>
            <Header
            title="Deliveries"
            back={navigation}
            />
            <View style={styles.content}>
              <Text>All Deliveries</Text>
              <View style={styles.logs}>
               <FlatList
                 data={logs}
                 renderItem={getLogs}
                 keyExtractor={item=>item.Id}
                 ListEmptyComponent={()=>renderEmptyComponent()}
               />
              </View>
            </View>
        </View>
    )
}