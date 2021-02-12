import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from "react-native-safe-area-context";
import LendersMortgageInsurance from "../Screens/LendersMortgageInsurance/LendersMortgageInsurance";
import StampDutyCalc from "../Screens/StampDuty/StampDutyCalc";
import {colors} from '../Screens/style/colors'
import ArrowBack from '../components/arrowBack';
import FindLender from "../Screens/LendersMortgageInsurance/FindLender";
import LendersMortgageInsuranceCalc from '../Screens/LendersMortgageInsurance/LendersMortgageInsuranceCalc';

const Stack = createStackNavigator();


export default function LendersMortgageInsuranceStack({navigation}) {
    const options1: any = ({navigation}) => ({
        headerTitleStyle: {
            width: '90%',
            textAlign: 'center',
        },
        title: 'Loan Mortgage Insurance',
        headerLeft: () => <ArrowBack onPress={() => navigation.navigate('Home')}/>,
        headerStyle: {
            backgroundColor: 'rgba(255,255,255,0)',
            elevation: 0,
        },
    });
    const options2: any = ({navigation}) => ({
        headerTitleStyle: {
            width: '90%',
            textAlign: 'center',
        },
        title: 'Loan Mortgage Insurance',
        headerLeft: () => <ArrowBack onPress={() => navigation.goBack()}/>,
        headerStyle: {
            backgroundColor: 'rgba(255,255,255,0)',
            elevation: 0,
        },
    });
    const options3: any = ({navigation}) => ({
        headerTitleStyle: {
            width: '90%',
            textAlign: 'center',
        },
        title: 'Loan Mortgage Insurance',
        headerLeft: () => <ArrowBack onPress={() => navigation.goBack()}/>,
        headerStyle: {
            backgroundColor: colors.mainYellow,
            elevation: 0,
        },
    });
    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Navigator>
                <Stack.Screen name={'Lenders Mortgage Insurance'} component={LendersMortgageInsurance}
                              options={options1}/>
                <Stack.Screen name={'Find Lender'} component={FindLender} options={options2}/>
                <Stack.Screen name={'Lenders Mortgage Insurance Calc'} component={LendersMortgageInsuranceCalc} options={options3}/>
            </Stack.Navigator>
        </SafeAreaView>)
}
