import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from "react-native-safe-area-context";
import LoanRepayment from "../Screens/LoanRepayment";

const Stack = createStackNavigator ();


export default function LoanRepaymentStack({ navigation , route }) {
    return <SafeAreaView style={{ flex : 1 }}>
                    <Stack.Navigator>
                        <Stack.Screen name={'Loan Repayment'} component={LoanRepayment}/>
                    </Stack.Navigator>
            </SafeAreaView>
}
