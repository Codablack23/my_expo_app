import React,{useState} from 'react'
import {Text,View,TouchableWithoutFeedback,textInput, TextInput, FlatList} from 'react-native'
import Modal from '../global/modal'
import {modalStyles as styles} from '../global/homestyles'
import { EvilIcons,MaterialIcons,SimpleLineIcons } from '@expo/vector-icons'; 
import Button from './button';
import LocationDetails from './locationDetails';
import PackageDetails from './packageDetails';


export default function DispatchModal({visible,setVisibilty}){
      const [step,setStep]=useState(1)
       const data=[
         {name:"Lagos",id:"1"}
       ]
   
    return(
        <Modal 
        isVisible={visible}
        isTransparent={false}
        >
          <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                 <TouchableWithoutFeedback onPress={()=>{setVisibilty(false)}}>
                    <View>
                        <Text>
                        <EvilIcons name="close" size={30} color="black" />
                        </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <View style={{marginHorizontal:"5%", marginTop:"4%",alignItems:"center",width:"80%"}}>
                      <Text style={styles.modalTitleText}>Request Dispatch</Text>
                  </View>
              </View>
              {step==1 && (
                  <LocationDetails
                  data={data}
                  />
             )}
                {step==2 && (
                  <View style={{flex:1,padding:"4%"}}>
                    <TouchableWithoutFeedback onPress={()=>{setStep(1)}}>
                    <View>
                        <Text>
                        <EvilIcons name="arrow-left" size={30} color="black" />
                        </Text>
                    </View>
                  </TouchableWithoutFeedback>

                  <PackageDetails/>
                  </View>
                  )}
            <View >
               {step==1 &&(
                   <Button
                   eventFunction={()=>{setStep(2)}}
                   text="Next"
                   />
               )}
               {step==2 &&(
                   <Button
                   text="Finish Order"
                   />
               )}
            </View>
          </View>
        </Modal>
    )
}