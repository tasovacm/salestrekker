import * as React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {style} from '../../components/style/ComponentStyle';

const ProductSearchFound = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{flexGrow: 1}}>
        <Text>PRODUCT SEARCH FOUND</Text>
      </View>
      <TouchableOpacity
        style={style.mainButton}
        onPress={() => navigation.navigate('Product Search Details')}>
        <View
          style={{
            flexGrow: 1,
          }}>
          <Text>O</Text>
        </View>
        <Text numberOfLines={3} style={style.mainButtonText}>
          {'go to'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductSearchFound;
