import React,{useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { homeStyles as styles,theme } from '../global/homestyles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
import DispatchModal from '../components/homeModal';

export default function HomeScreen({navigation}) {
    const [modalShown,setModalShown]=useState(false)
  return (
    <View style={styles.container}>
       <DispatchModal
       visible={modalShown}
       setVisibilty={setModalShown}
       />
       <View style={styles.drawerMenu}>
         <TouchableWithoutFeedback onPress={()=>{navigation.openDrawer()}}>
             <Text style={styles.menuIcon}><Ionicons name="menu-outline" size={24} color="black" /></Text>
         </TouchableWithoutFeedback>
       </View>
      <MapView style={styles.map}
      mapType={'standard'}
        showsUserLocation={true}
      />
      <View style={styles.orderContainer}>
       <View style={{width:"100%"}}>
       <TouchableWithoutFeedback onPress={()=>{setModalShown(true)}}>
           <View style={styles.orderButton}>
            <Text style={{color:"#9E9E9E"}}>Request A Dispatch</Text>
           </View>
        </TouchableWithoutFeedback>
       </View>
      </View>
    </View>
  );
}

