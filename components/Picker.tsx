import * as React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {style} from './style/ComponentStyle';

const PickerComponent = (props) => {
    const pickerItems = () => {
        let array = [];
        for (const item in props.values) {
            if (props.values.hasOwnProperty(item)) {
                array.push(
                    <Picker.Item
                        key={props.values[item]}
                        label={!!props.string ? props.string[props.values[item]] : props.values[item]}
                        value={item}
                    />,
                );
            }
        }
        return array;
    };

    return (
        <View style={[style.marginTop20, style.pickerWrapper]}>
            <Text style={!!props.textStyle ? props.textStyle : style.inputLabel}>{props.label}</Text>
            <View style={style.picker}>
                <Picker mode={'dropdown'} selectedValue={props.value} onValueChange={props.onChange}
                        itemStyle={{width:"100%", top:50}}
                        dropdownIconColor={'#000000'}
                        >
                    {pickerItems()}
                </Picker>
            </View>
        </View>
    );
};

export default PickerComponent;
