"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var ComponentStyle_1 = require("./style/ComponentStyle");
var screenStyle_1 = require("../Screens/style/screenStyle");
var Input = function (props) {
    return (<react_native_1.View style={[ComponentStyle_1.style.marginTop20, screenStyle_1.screenStyle.grow1]}>
      <react_native_1.Text style={ComponentStyle_1.style.inputLabel}>{props.label}</react_native_1.Text>
      <react_native_1.TextInput style={ComponentStyle_1.style.textInput} onChangeText={function (e) { return props.onChangeText(e); }} value={props.value}/>
    </react_native_1.View>);
};
exports.default = Input;
