"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var picker_1 = require("@react-native-picker/picker");
var ComponentStyle_1 = require("./style/ComponentStyle");
var PickerComponent = function (props) {
    var pickerItems = function () {
        var array = [];
        for (var item in props.values) {
            if (props.values.hasOwnProperty(item)) {
                array.push(<picker_1.Picker.Item key={props.values[item]} label={!!props.string ? props.string[props.values[item]] : props.values[item]} value={item}/>);
            }
        }
        return array;
    };
    console.log('props.value');
    console.log(props.value);
    return (<react_native_1.View style={[ComponentStyle_1.style.marginTop20, ComponentStyle_1.style.pickerWrapper]}>
            <react_native_1.Text style={ComponentStyle_1.style.inputLabel}>{props.label}</react_native_1.Text>
            <react_native_1.View style={ComponentStyle_1.style.picker}>
                <picker_1.Picker selectedValue={props.value} onValueChange={props.onChange}>
                    {pickerItems()}
                </picker_1.Picker>
            </react_native_1.View>
        </react_native_1.View>);
};
exports.default = PickerComponent;
