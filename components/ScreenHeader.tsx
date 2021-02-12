import * as React from 'react';
import {View, Text} from 'react-native';
import {style} from './style/ComponentStyle';

const ScreenHeader = (props) => {
  return (
    <View style={style.marginTop20}>
      <Text style={style.mainHeader}>{props.mainText}</Text>
      <Text style={style.subHeader}>{props.subText}</Text>
    </View>
  );
};

export default ScreenHeader;
