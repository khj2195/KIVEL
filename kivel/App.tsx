import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import StackNav from './src/navigation/stackNav'
import 'react-native-gesture-handler';

import {  } from "@react-navigation/material-bottom-tabs"; 

export default function App () {
	return (
		<NavigationContainer>
			<StackNav />
		</NavigationContainer>
	)
}
