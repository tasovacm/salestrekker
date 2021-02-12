import * as React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {style} from './style/ComponentStyle';
import {screenStyle} from '../Screens/style/screenStyle'
import {formatter} from "../core/Util/formatter";

type format = {
    value: number,
    formatted: string;
}
const Input = (props) => {
    let value: string = !!props.value ? props.value.toString() : '';
    return (
        <View style={[style.marginTop20, screenStyle.grow1]}>
            <Text style={style.inputLabel}>{props.label}</Text>
            <View style={style.textInputWrapper}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 24,
                    marginLeft: 10,
                    marginRight: -10
                }}>{value !== '' && props.prefix}</Text>
                <TextInput
                    keyboardType={!!props.keyboard ? props.keyboard : 'default'}
                    style={[style.textInput, {flex: (!props.prefix && !props.suffix)? 1 : !!props.prefix ? 1 : 0}]}
                    onChangeText={(e) => {
                        if (props.inputType === 'currency') {
                            let x: format = {value: 0, formatted: ''};
                            x.value = (formatter.toNumber(e));
                            x.formatted = (formatter.separated(formatter.toNumber(e)));
                            props.onChangeText(x)
                        } else {
                            props.onChangeText(e)
                        }
                    }}
                    value={value}
                />
                <Text style={{textAlign: 'center', fontSize: 24, marginLeft: 10}}>{props.suffix}</Text>
            </View>
        </View>
    );
};

export default Input;
