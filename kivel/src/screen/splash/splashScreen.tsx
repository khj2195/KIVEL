import React from 'react'
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'

interface splashProps {

}

export function SplashScreen(props : splashProps) {
        return ( 
            <View style={{flex :1, backgroundColor : 'green'}}>
                <LottieView source={require('../../assets/animations/babyAnimation.json')} autoPlay />
            </View>
        );
}
const styles = StyleSheet.create({})