import React, { Children } from 'react'
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { SIZE_HEIGHT, SIZE_WIDTH } from "./constants";


interface modalProps {
    modalVisible : boolean;
    setModalVisible : any;
    children : any;
}

export default function modal(props : modalProps) {
    return (
        <Modal
        animationIn = 'zoomIn'
        isVisible = { props.modalVisible }>
            { props.children }
        </Modal>
    )
}
