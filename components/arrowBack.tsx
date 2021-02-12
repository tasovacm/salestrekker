import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {style} from './style/ComponentStyle';
import Icon from 'react-native-vector-icons/Fontisto';

const ArrowBack = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.arrowBack}>
      <Icon name={'arrow-left-l'} size={24} color={'#000'} />
    </TouchableOpacity>
  );
};

export default ArrowBack;
