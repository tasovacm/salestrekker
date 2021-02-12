import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {colors} from '../Screens/style/colors';
import fontelloConfig from '../config.json';
import MaximumBorrowing from '../Screens/MaximumBorrowing';
import LoanRepaymentStack from './LoanRepaymentStack';
import ProductSearchStack from './ProductSearchStack';
import StampDutyStack from './StampDutyStack';
import LendersMortgageInsuranceStack from './LendersMortgageInsuranceStack';
import IncomeStack from "./IncomeStack";
const Icon = createIconSetFromFontello(fontelloConfig);
const Tab = createBottomTabNavigator();

const MainTabNavigation = ({navigation, route}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Tab.Navigator
                // @ts-ignore
                initialRouteName={route.params.linkTo}
                screenOptions={({route}) => ({
                    cardStyle: {backgroundColor: '#fff'},
                    order: ['Loan Repayment', 'Maximum Borrowing', 'Product Search'],
                    headerShown: true,
                })}

                tabBarOptions={{
                    contentOptions: {
                        activeTintColor: '#e91e63',
                        itemsContainerStyle: {
                            marginVertical: 0,
                        },
                        iconContainerStyle: {
                            opacity: 1
                        }
                    },
                    activeTintColor: colors.mainBlue, // Color of tab when pressed
                    inactiveTintColor: '#4c4c4c', // Color of tab when not pressed
                    showIcon: 'true', // Shows an icon for both iOS and Android
                    showLabel: false, //No label for Android
                    labelStyle: {
                        fontSize: 20,
                    },
                    style: {
                        backgroundColor: '#f6f5fb', // Makes Android tab bar white instead of standard blue
                        height: 80, // I didn't use this in my app, so the numbers may be off.
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                    },
                }}>
                <Tab.Screen name="Product Search" component={ProductSearchStack} options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="search" color={color} size={36} type={'trekker'}/>
                    )
                }}/>
                <Tab.Screen name="Maximum Borrowing" component={MaximumBorrowing} options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="borrow" color={color} size={36} type={'trekker'}/>
                    )
                }}/>
                <Tab.Screen name="Loan Repayment" component={LoanRepaymentStack} options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="repayment" color={color} size={36} type={'trekker'}/>
                    )
                }}/>
                <Tab.Screen name="Income" component={IncomeStack} options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="income" color={color} size={36} type={'trekker'}/>
                    )
                }}/>
                <Tab.Screen name="Stamp Duty" component={StampDutyStack} options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="stamp" color={color} size={36} type={'trekker'}/>
                    )
                }}/>
                <Tab.Screen
                    name="Lenders Mortgage Insurance"
                    component={LendersMortgageInsuranceStack} options={{
                    tabBarIcon: ({color}) => (
                        <Icon name="lmi" color={color} size={36} type={'trekker'}/>
                    )
                }}/>
            </Tab.Navigator>
        </SafeAreaView>
    );
};

export default MainTabNavigation;
