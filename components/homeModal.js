import React from 'react'
import {Text,View,TouchableWithoutFeedback,textInput} from 'react-native'
import Modal from '../global/modal'
import {modalStyles as styles} from '../global/homestyles'
import { EvilIcons } from '@expo/vector-icons'; 

export default function DispatchModal({visible,setVisibilty}){
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
          </View>
        </Modal>
    )
}