import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Income from '../Screens/Income/Income';
import ArrowBack from '../components/arrowBack';
import IncomeCalc from "../Screens/Income/IncomeCalc";
import {colors} from "../Screens/style/colors";

export default function IncomeStack({navigation}) {
    const Stack = createStackNavigator();

    const options: any = ({navigation}) => ({
        headerTitleStyle: {
            width: '90%',
            textAlign: 'center',
        },
        title: 'Income Calculation',
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
        title: 'Income Calculation',
        headerLeft: () => <ArrowBack onPress={() => navigation.goBack()}/>,
        headerStyle: {
            backgroundColor: colors.mainYellow,
            elevation: 0,
        },
    })
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Income'} component={Income} options={options}/>
            <Stack.Screen name={'Income Calc'} component={IncomeCalc} options={options2}/>
        </Stack.Navigator>
    );
}
