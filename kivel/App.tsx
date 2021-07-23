import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import StackNav from './src/navigation/stackNav'
import 'react-native-gesture-handler';

import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/store'



//네비게이션 사용시 렌더 성능 향상
// enableScreens()

export default function App () {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<StackNav />
			</NavigationContainer>
		</Provider>
	)
}
