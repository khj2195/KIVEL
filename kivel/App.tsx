import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import StackNav from './src/navigation/stackNav'
import 'react-native-gesture-handler';

import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/store'
import { SplashScreen } from './src/screen/splash/splashScreen';


//네비게이션 사용시 렌더 성능 향상
// enableScreens()

export default function App () {
	
	const [splash, setSplash] = React.useState(true);
	React.useEffect(() => {
	  setTimeout(() => {
		setSplash(false);
	  }, 1000);
	}, []);

	return (
		splash 
		?
		<SplashScreen />

		: 
		<Provider store={store}>
			<NavigationContainer>
				<StackNav />
			</NavigationContainer>
		</Provider>
	)
}
