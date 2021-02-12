import * as React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {style} from './style/ComponentStyle';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
const HomeScreenOption = (props) => {
  return (
    <TouchableOpacity style={style.mainButton} onPress={props.onPress}>
      <View
        style={{
          flexGrow: 1,
        }}>
          <Icon name={props.icon} color={'white'} size={50} style={{maxWidth: 50}}/>
          {
              //<Image source={props.icon} style={{width:50, height:50}}/>
          }
      </View>
      <Text numberOfLines={3} style={style.mainButtonText}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeScreenOption;
