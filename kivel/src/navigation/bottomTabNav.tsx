import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, View } from 'react-native';


const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
	return(
		<View>
			<Text>This is homeScreen</Text>
		</View>
	)
}

function SettingsScreen() {
	return(
		<View>
			<Text>This is homeScreen</Text>
		</View>
	)
}


export default function bottomTabNav() {
    return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
	  </Tab.Navigator>
    )
}

