import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/home';
import MainTabNavigation from './MainTabNavigation';
import ProductSearchDetails from '../Screens/ProductSearch/ProductSearchDetails';
import ArrowBack from '../components/arrowBack';

export default function MainStack({navigation}) {
    const Stack = createStackNavigator();

    const options = ({navigation}) => ({
        headerTitleStyle: {
            width: '90%',
            textAlign: 'center',
        },
        title: 'Product Search',
        headerLeft: () => <ArrowBack onPress={() => navigation.goBack()}/>,
        headerStyle: {
            backgroundColor: 'rgba(255,255,255,0)',
            elevation: 0,
        },
    });
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={'Home'}
                component={HomeScreen}
            />
            <Stack.Screen
                name={'MainTab'}
                component={MainTabNavigation}
            />
        </Stack.Navigator>
    );
}
