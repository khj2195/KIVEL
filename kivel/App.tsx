import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import StackNav from './src/navigation/stackNav'
import 'react-native-gesture-handler';

export default function App () {
	return (
		<NavigationContainer>
			<StackNav></StackNav>
		</NavigationContainer>
	)
}
