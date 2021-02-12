import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from "react-native-safe-area-context";
import StampDuty from "../Screens/StampDuty/StampDuty";
import StampDutyCalc from "../Screens/StampDuty/StampDutyCalc";
import {colors} from '../Screens/style/colors'
import ArrowBack from '../components/arrowBack';

const Stack = createStackNavigator();


export default function StampDutyStack({navigation}) {
    const options1:any = ({navigation}) => ({
        headerTitleStyle: {
            width: '90%',
            textAlign: 'center',
        },
        title: 'Stamp Duty',
        headerLeft: () => <ArrowBack onPress={() => navigation.navigate('Home')}/>,
        headerStyle: {
            backgroundColor: 'rgba(255,255,255,0)',
            elevation: 0,
        },
    });
    const options2:any = ({navigation}) => ({
        headerTitleStyle: {
            width: '90%',
            textAlign: 'center',
        },
        title: 'Stamp Duty',
        headerLeft: () => <ArrowBack onPress={() => navigation.goBack()}/>,
        headerStyle: {
            backgroundColor: colors.mainYellow,
            elevation: 0,
        },
    });
    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Navigator>
                <Stack.Screen name={'Stamp Duty'} component={StampDuty} options={options1}/>
                <Stack.Screen name={'Stamp Duty Calc'} component={StampDutyCalc} options={options2}/>
            </Stack.Navigator>
        </SafeAreaView>)
}
