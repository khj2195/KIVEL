import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ApplicationState, kakaoLogin } from '../../redux/store';  
import { useSelector, useDispatch } from 'react-redux';

export default function homeScreen() {

    
    const {user, error} = useSelector((state : ApplicationState) => state.userReducer);
    console.log('home : ', user)

    return (
        
        <View style={{ flex : 1, backgroundColor : 'white'}}>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
            <Text>This is homeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
