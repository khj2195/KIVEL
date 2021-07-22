import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native';
import bottomTabNav from './bottomTabNav'

interface testProps {

}

function login(){
    return (
        <View>
            <Text> this is login page </Text>
        </View>
    )
}
const Stack = createStackNavigator();

export const StackNav: React.FC<testProps> = ({}) => {
        return (
                <Stack.Navigator initialRouteName = "Login" >
                    <Stack.Screen name="Login" component={bottomTabNav} />
                    {/* <Stack.Screen name="Register" component={register} /> */}
                </Stack.Navigator>
        );
}

export default StackNav;
