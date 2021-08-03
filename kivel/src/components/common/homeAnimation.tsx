import React from 'react'
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'

interface homeAnimationProps {
        autoplay : boolean
}

export function HomeAnimation(props : homeAnimationProps) {
        console.log("props : ", props.autoplay)
        return (
                <View style={{flex :1, }}>
                        <LottieView 
                        style = {{ width: 30, height: 30, bottom: 0 }}
                        source={
                                require('../../assets/animations/homeAnimation.json')} 
                                autoPlay = {true}
                                loop = {props.autoplay}
                        />
                </View>
        );
}
const styles = StyleSheet.create({})