import * as React from 'react';
import {NavigationContainer , DefaultTheme} from '@react-navigation/native';
import {SafeAreaView , Text , View} from 'react-native';
import MainStack from './Navigation/MainStack';
import {colors} from './Screens/style/colors';

const MyTheme = {
	...DefaultTheme ,
	dark : false ,
	colors : {
		...DefaultTheme.colors ,
		primary : colors.mainBlue ,
		background : '#fff',
	} ,
};
export default function App() {
	return (
		<SafeAreaView style={{ flex : 1 , backgroundColor : '#fff' }}>
			<View style={{ flex : 1 , backgroundColor : '#fff' }}>
				<NavigationContainer initialScreen={'Home'} theme={MyTheme}>
					<MainStack/>
				</NavigationContainer>
				<Text style={{textAlign: 'center', backgroundColor: colors.gray}}>Powered by <Text style={{fontWeight: 'bold'}}>Salestrekker</Text></Text>
			</View>
		</SafeAreaView>
	);
}
