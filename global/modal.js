import React from 'react'
import { Modal } from "react-native"

export default function ModalComponent(props){
    return(
        <Modal
        animationType="slide"
        visible={props.isVisible}
        transparent={props.isTransparent}
        presentationStyle={props.presentationStyle}
       >
           {props.children}
       </Modal>
    )
}