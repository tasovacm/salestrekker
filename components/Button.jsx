"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var React = require("react");
var ComponentStyle_1 = require("./style/ComponentStyle");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var Button = function (props) {
    return (<react_native_1.View style={[ComponentStyle_1.style.marginTop20, { alignItems: 'center', marginVertical: 40 }]}>
        <react_native_1.TouchableOpacity style={[ComponentStyle_1.style.defaultButtonWrapper, {
            width: props.width ? props.width : '50%',
            backgroundColor: props.backgroundColor,
        }]} onPress={props.onPress}>
            <AntDesign_1.default name={props.icon} size={props.fontSize} color={props.color} style={{ marginRight: 5 }}/>
            <react_native_1.Text style={{ color: props.color, fontSize: props.fontSize, marginLeft: 5 }}>
                {props.text}
            </react_native_1.Text>
        </react_native_1.TouchableOpacity>
    </react_native_1.View>);
};
exports.default = Button;
