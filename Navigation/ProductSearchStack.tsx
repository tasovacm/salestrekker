import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductSearch from '../Screens/ProductSearch/ProductSearch';
import ProductSearchFound from '../Screens/ProductSearch/ProductSearchFound';
import ProductSearchDetails from '../Screens/ProductSearch/ProductSearchDetails';
import ArrowBack from '../components/arrowBack';

export default function ProductSearchStack({navigation}) {
  const Stack = createStackNavigator();

  const options:any = ({navigation}) => ({
    headerTitleStyle: {
      width: '90%',
      textAlign: 'center',
    },
    title: 'Product Search',
    headerLeft: () => <ArrowBack onPress={() => navigation.goBack()} />,
    headerStyle: {
      backgroundColor: 'rgba(255,255,255,0)',
      elevation: 0,
    },
  });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Product Search'}
        component={ProductSearch}
        options={options}
      />
      <Stack.Screen
        name={'Product Search Found'}
        component={ProductSearchFound}
        options={options}
      />
      <Stack.Screen
        name={'Product Search Details'}
        component={ProductSearchDetails}
        options={options}
      />
    </Stack.Navigator>
  );
}
