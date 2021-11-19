import ModalComponent from "../global/modal";
import {componentStyles as styles} from '../global/styles'
import React from 'react'
import {View,Text,TouchableWithoutFeedback} from 'react-native'
import { Overlay } from "react-native-elements";
import { AntDesign,SimpleLineIcons,Ionicons  } from '@expo/vector-icons'; 

export default function VerifyPhoneModal({number,visible,setVisiblity}){
    return(
        <ModalComponent 
        isVisible={visible} 
        isTransparent={true}
        presentationStyle={"overFullScreen"}
        style={styles.ModalComponent}
        >
        <TouchableWithoutFeedback onPress={()=>{setVisiblity(false)}}>
        <View style={styles.overlay}>
            <View style={styles.modalContent}>
                <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Didn't recieve the code ?</Text>
                    <Text style={styles.modalSubTitle}>Resend to <Text style={{color:"#616161"}}>{number}</Text></Text>
                </View>
                <View style={styles.modalBody}> 
                   <View>
                       <TouchableWithoutFeedback>
                          <View style={styles.modalItem}>
                           <Text><SimpleLineIcons name="phone" size={24} color="#616161" /></Text>
                           <Text style={styles.modalText}>Request call back</Text>
                          </View>
                       </TouchableWithoutFeedback>
                   </View>  
                   <View >
                       <TouchableWithoutFeedback>
                           <View style={styles.modalItem}>
                           <Text><Ionicons name="md-chatbox-ellipses-outline" size={24} color="#616161" /></Text>
                           <Text style={styles.modalText}>Resend code by SMS</Text>
                           </View>
                       </TouchableWithoutFeedback>
                   </View>
                   <View >
                        <TouchableWithoutFeedback>
                            <View style={styles.modalItem}> 
                           <Text><SimpleLineIcons name="pencil" size={24} color="#616161" /></Text>
                           <Text style={styles.modalText}>Edit phone number</Text>
                           </View>
                       </TouchableWithoutFeedback>
                   </View>
                </View>
                </View>
            </View>
            </View>
        </TouchableWithoutFeedback>
        </ModalComponent>
    )
}