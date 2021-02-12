import * as React from 'react';
import {View, Text, Image} from 'react-native';
import HomeScreenOption from '../components/HomeScreenOption';
import {screenStyle} from './style/screenStyle';
//@ts-ignore
import logo from '../assets/logo.png'
const HomeScreen = ({navigation}) => {
  return (
    <View style={screenStyle.homeComponent}>
        {  <Image source={logo} style={screenStyle.logo} />
        }
      <View>
        <Text numberOfLines={2} style={screenStyle.homeHeader}>
          Finance&Coffee Calculator
        </Text>
      </View>
      <Text style={screenStyle.subHeader}>
        Please select one of the{'\n'}
        options bellow
      </Text>
      <View style={screenStyle.homeOptions}>
        <View style={screenStyle.homeOptionsColumn}>
          <HomeScreenOption
            text={'Product Search'}
            onPress={() => navigation.navigate('MainTab', {linkTo: 'Product Search'})}
            icon={'search'}
          />
          <HomeScreenOption
            text={'Loan Repayment'}
            onPress={() => navigation.navigate('MainTab', {linkTo: 'Loan Repayment'})}
            icon={'repayment'}
          />
          <HomeScreenOption
            text={'Stamp Duty'}
            onPress={() => navigation.navigate('MainTab', {linkTo: 'Stamp Duty'})}
            icon={'stamp'}
          />
        </View>
        <View style={screenStyle.homeOptionsColumn}>
          <HomeScreenOption
            text={'Maximum Borrowing'}
            onPress={() => navigation.navigate('MainTab', {linkTo: 'Maximum Borrowing'})}
            icon={'borrow'}
          />
          <HomeScreenOption
            text={'Income'}
            onPress={() => navigation.navigate('MainTab', {linkTo: 'Income'})}
            icon={'income'}
          />
          <HomeScreenOption
            text={'Lenders Mortgage Insurance'}
            onPress={() => navigation.navigate('MainTab', {linkTo: 'Lenders Mortgage Insurance'})}
            icon={'lmi'}
          />
        </View>
      </View>
      <Text style={screenStyle.homeFooter}>Powered by SalesTrekker</Text>
    </View>
  );
};

export default HomeScreen;
