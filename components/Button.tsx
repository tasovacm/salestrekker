import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {style} from './style/ComponentStyle'
import Icon from 'react-native-vector-icons/AntDesign';

const Button = (props) => {
    return (
    <View style={[style.marginTop20, { alignItems:'center', marginVertical: 40, flex:1}]}>
        <TouchableOpacity
            style={[style.defaultButtonWrapper, {
                width: props.width ? props.width : '50%',
                backgroundColor: props.backgroundColor,
                borderRadius: !!props.borderRadius ? props.borderRadius : 50,
            }]}
            onPress={props.onPress}>
            {(props.iconPosition === 'right' || props.iconPosition===undefined) &&
            <Icon name={props.icon} size={props.fontSize} color={props.color} style={{marginRight: 5}} />}
            <Text style={{color:props.color, fontSize: props.fontSize, marginLeft: 5}}>
                {props.text}
            </Text>
            {props.iconPosition === 'left' &&
			<Icon name={props.icon} size={props.fontSize} color={props.color} style={{marginLeft: 5}} />}
        </TouchableOpacity>
    </View>
    )
};

export default Button;
